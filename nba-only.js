/* HoopRate NBA-only adapter – PREPARED / NETWORK ACCESS DISABLED.
   Do not enable until written NBA permission and approved endpoint scope are verified.
   All functions are pure. No fetch, XHR, JSONP, images or automatic requests.
   Input shapes target NBA scheduleLeagueV2 + liveData boxscore/playbyplay.
*/
(function(global){'use strict';
const n=x=>{const v=Number(x);return Number.isFinite(v)?v:0};
const iso=x=>{const d=new Date(x);return Number.isFinite(d.getTime())?d.toISOString():null};
const status=x=>/final|finished|complete/i.test(String(x||''))?{type:{completed:true,state:'post'}}:{type:{completed:false,state:/live|progress/i.test(String(x||''))?'in':'pre'}};
function gamesFromSchedule(payload){
 const league=payload?.leagueSchedule||payload?.data?.leagueSchedule||payload;
 const days=league?.gameDates||[];
 const out=[];
 for(const day of days)for(const g of day.games||[]){
  const when=iso(g.gameDateTimeUTC||g.gameDateTimeEst||g.gameDateTime||day.gameDate);
  if(!g.gameId||!when||!g.homeTeam||!g.awayTeam)continue;
  const state=status(g.gameStatusText||({'3':'Final','2':'Live','1':'Scheduled'}[String(g.gameStatus)]||''));
  const team=(t,side)=>({homeAway:side,team:{id:String(t.teamId||t.teamTricode||''),displayName:t.teamName?((t.teamCity||'')+' '+t.teamName).trim():t.teamTricode,shortDisplayName:t.teamName||t.teamTricode,abbreviation:t.teamTricode},score:state.type.completed?String(t.score??''):null,linescores:(t.periods||[]).map(p=>({value:n(p.score)}))});
  out.push({id:String(g.gameId),date:when,status:state,competitions:[{competitors:[team(g.homeTeam,'home'),team(g.awayTeam,'away')]}]});
 }
 return out;
}
function boxscoreToSummary(data){
 const game=data?.game||data;
 if(!game?.homeTeam&&!game?.awayTeam)return null;
 const players=[game.homeTeam,game.awayTeam].filter(Boolean).map(t=>({
  team:{id:String(t.teamId||t.teamTricode||'')},
  statistics:[{keys:['min','pts','reb','ast','stl','blk'],labels:['MIN','PTS','REB','AST','STL','BLK'],athletes:(t.players||[]).map(p=>({
   athlete:{id:String(p.personId||''),displayName:p.name||((p.firstName||'')+' '+(p.familyName||'')).trim()},
   stats:[String(p.statistics?.minutes||'0'),String(n(p.statistics?.points)),String(n(p.statistics?.reboundsTotal)),String(n(p.statistics?.assists)),String(n(p.statistics?.steals)),String(n(p.statistics?.blocks))]
  }))}]
 }));
 return {boxscore:{players}};
}
function playActions(data){
 const actions=data?.game?.actions||data?.actions||[];
 return actions.map(p=>({scoreHome:p.scoreHome??p.homeScore,scoreAway:p.scoreAway??p.awayScore,period:n(p.period),description:p.description||'',actionType:p.actionType||'',subType:p.subType||''}));
}
function forecast(event,history){
 const cs=event?.competitions?.[0]?.competitors||[];
 if(cs.length!==2)return null;
 function form(id){
  const entries=history.filter(h=>h.status?.type?.completed&&new Date(h.date)<new Date(event.date)&&h.competitions?.[0]?.competitors?.some(c=>String(c.team?.id)===id))
   .sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,3);
  if(!entries.length)return null;
  let wins=0,net=0,pts=0;
  for(const e of entries){const sides=e.competitions[0].competitors,own=sides.find(x=>String(x.team?.id)===id),opp=sides.find(x=>String(x.team?.id)!==id);if(!own||!opp)continue;const delta=n(own.score)-n(opp.score);wins+=delta>0?1:0;net+=delta;pts+=n(own.score)}
  return {games:entries.length,wins,net:net/entries.length,pts:pts/entries.length};
 }
 const a=form(String(cs[0].team?.id)),b=form(String(cs[1].team?.id));
 if(!a||!b)return {score:null,missing:true,limited:true,reason:'Unvollständige NBA-Datengrundlage: keine Prognose möglich.'};
 const clamp=x=>Math.max(0,Math.min(100,x));
 const score=clamp(Math.round(clamp(85-Math.abs(a.net-b.net)*2.2)*.65+clamp(35+(a.pts+b.pts-205)*.75)*.35));
 const sample=Math.min(a.games,b.games);
 return {score,limited:sample<3,preliminary:sample<3,injuryKnown:false,absences:[],form:cs.map((c,i)=>({team:c.team?.shortDisplayName||'Team',data:i===0?a:b})),
 reason:(sample<3?'Vorläufige Prognose. ':'')+'Schätzung anhand der letzten drei verfügbaren NBA-Spiele je Team. Verletzungen und bestätigte Star-Ausfälle werden ohne verlässliche Quelle nicht berücksichtigt.'};
}
function selfTest(){
 const sample={leagueSchedule:{gameDates:[{games:[{gameId:'001',gameDateTimeUTC:'2026-10-28T23:00:00Z',gameStatus:3,gameStatusText:'Final',homeTeam:{teamId:1,teamTricode:'AAA',teamCity:'Alpha',teamName:'Aces',score:111,periods:[{score:25},{score:30},{score:26},{score:30}]},awayTeam:{teamId:2,teamTricode:'BBB',teamCity:'Beta',teamName:'Bears',score:109,periods:[{score:26},{score:28},{score:30},{score:25}]}}]}]}};
 const e=gamesFromSchedule(sample)[0];
 const box=boxscoreToSummary({game:{homeTeam:{teamId:1,players:[{personId:7,name:'Test Player',statistics:{minutes:'32',points:41,reboundsTotal:11,assists:12,steals:2,blocks:1}}]},awayTeam:{teamId:2,players:[]}}});
 if(!e||!e.status.type.completed||e.competitions[0].competitors[0].linescores.length!==4||box.boxscore.players[0].statistics[0].athletes[0].stats[1]!=='41')throw Error('NBA adapter self-test failed');
 if(!Array.isArray(playActions({game:{actions:[{scoreHome:'2',scoreAway:'0',period:1}]}})))throw Error('PBP self-test failed');
 return {passed:true,scheduledGames:1,boxscorePlayers:1};
}
global.HoopRateNBAAdapter=Object.freeze({gamesFromSchedule,boxscoreToSummary,playActions,forecast,selfTest});
})(window);
