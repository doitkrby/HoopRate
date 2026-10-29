/* HoopRate language layer: display-only, no external calls or scoring changes. */
(()=>{'use strict';
const D={
'Welche NBA-Spiele lohnen sich?':'Which NBA games are worth watching?',
'Alle NBA-Spiele des gewählten Spieltags – auf Wunsch nach Mindestscore filtern. Spoilerarme Ansicht ist standardmäßig aktiv.':'All NBA games on the selected date – optionally filter by minimum rating. Spoiler-light mode is enabled by default.',
'Spieltag':'Game date','Vorheriger Spieltag':'Previous game date','Nächster Spieltag':'Next game date','Spieltag auswählen':'Select game date','Optionen':'Options',
'Sortierung':'Sort by','Beste zuerst':'Highest rated first','Neueste zuerst':'Newest first','Spielstatus':'Game status','Alle Spiele':'All games','Nur abgeschlossene':'Completed only','Team':'Team','Alle Teams':'All teams','Lieblingsmannschaft':'Favorite team','Keine ausgewählt':'None selected','Spoiler-Schutz':'Spoiler protection',
'Standard – Score und neutrale Empfehlungen':'Standard – ratings and neutral recommendations','Streng – nur Score und Teams':'Strict – only ratings and teams',
'Spiele unter gesetztem Score ausblenden':'Hide games below selected rating','Mindestscore':'Minimum rating','Persönlicher Score (Expertenmodus)':'Personal rating (advanced)','Spannung':'Excitement','Star-Faktor':'Star factor','Einzelleistung':'Individual performance','Drama':'Drama',
'Die vier Gewichte ergeben zusammen immer 100 %. Wird eines verändert, passen sich die anderen automatisch an. Der Score wird nur für dich im Browser angepasst.':'The four weights always total 100%. Changing one automatically adjusts the others. Your personal ratings are calculated locally in this browser.',
'Standardfilter':'Reset filters','NBA-Spiele laden':'Load NBA games','Bereit zum Laden':'Ready to load','Mehr':'Details','Weniger':'Less','Spiele':'Games','Hinweise & Datenquellen':'Notes & data sources',
'HoopRate-Bewertungen sind eine eigene, transparente Heuristik – keine offizielle NBA- oder ESPN-Wertung. Star-Leistungen werden aus Boxscore-Statistiken erkannt, nicht aus einer offiziellen Star-Liste. ESPN ist die Basis; verfügbare NBA-Spielverlaufsdaten werden ergänzend genutzt. Nicht erreichbare Zusatzdaten verändern die Grundwertung nicht. Öffentliche Datenzugänge und Nutzungsrechte sind gesondert zu prüfen.':'HoopRate ratings use an independent, transparent formula – they are not official NBA or ESPN ratings. Star performances are identified from box scores, not from an official star list. ESPN is the primary source; available NBA play-by-play data are used as an additional source. Unavailable supplementary data do not affect the base rating. Public data access and usage rights must be assessed separately.',
'Wähle einen Zeitraum und tippe auf „NBA-Spiele laden“.':'Choose a date and tap “Load NBA games”.',
'Quelle: ESPN NBA Scoreboard + Game Summary. Live-Import nach Klick.':'Source: ESPN NBA Scoreboard + Game Summary. Live import on tap.',
'Quellen: ESPN (Basis) · NBA Play-by-Play (Saisonspielplan, falls zuordenbar) · ':'Sources: ESPN (primary) · NBA play-by-play (season schedule, if matched) · ',
'Offizieller NBA Injury Report ↗':'Official NBA injury report ↗','(Kontrollquelle, nicht automatisch importiert)':'(reference only, not automatically imported)',
'Bewertung erklären (kann Spoiler enthalten)':'Explain rating (may contain spoilers)','Prognosegrundlage anzeigen':'Show forecast details',
'Für mehr Informationen den Spoiler-Schutz unter „Optionen“ auf „Standard“ stellen.':'To see more details, change spoiler protection under “Options” to “Standard”.',
'Für laufende oder angesetzte Spiele liegt keine belastbare Prognose vor.':'No reliable forecast is available for live or upcoming games.',
'Besonders sehenswert':'Must-watch','Star-Performance':'Star performance','Hohe Spannung':'High excitement','Starke Einzelleistung':'Outstanding individual performance',
'NBA-Spiel':'NBA game','Beendet':'Final','Angesetzt / laufend':'Scheduled / live','Empfehlung':'Recommended','Bewertet':'Rated',
'Unvollständige Datenlage':'Incomplete data','Unvollständige Daten':'Incomplete data','Vorläufige Prognose':'Preliminary forecast','Prognose · unverbindlich':'Unofficial forecast','Ohne Prognose':'No forecast','Prognose':'Forecast',
'Als ungesehen markieren':'Mark as unwatched','Als gesehen markieren':'Mark as watched','Gesehen':'Watched','Cache':'Cached','Live abgerufen':'Fetched live','unvollständige Daten':'incomplete data','eingeschränkte Spielverlaufsdaten':'limited play-by-play data',
'Detaildaten-Status':'Detailed data status','ESPN-Verletzungsdaten':'ESPN injury data','Gemeldete Ausfälle':'Reported absences',
'Quelle abgefragt':'source checked','nicht zuverlässig verfügbar':'not reliably available','offiziellen NBA-Report separat prüfen':'check official NBA report separately',
'Eingeschränkte Datengrundlage.':'Limited data available.','Keine offizielle Prognose.':'Not an official forecast.',
'Keine Spiele gefunden. Versuche einen anderen Zeitraum oder lade später erneut.':'No games found. Try another date or reload later.',
'Spiele werden geladen …':'Loading games…','Lade NBA-Spielplan …':'Loading NBA schedule…','Keine Daten geladen':'No data loaded','API-Zugriff fehlgeschlagen.':'API request failed.','Keine NBA-Spiele in diesem Zeitraum.':'No NBA games in this date range.',
'Bitte einen gültigen Zeitraum wählen.':'Please select a valid date range.','Bitte maximal 14 Tage auf einmal laden.':'Please load no more than 14 days at once.',
'Import mit Einschränkungen':'Import completed with limitations','NBA-Daten geladen':'NBA data loaded','Analysiere Boxscores:':'Analyzing box scores:','Automatischer Start fehlgeschlagen':'Automatic startup failed',
'Viele Führungswechsel sorgen für Abwechslung.':'Many lead changes keep the game exciting.','Die Führung wechselt im Spielverlauf auffällig oft.':'The lead changes frequently throughout the game.','Zahlreiche Führungswechsel halten die Partie abwechslungsreich.':'Frequent lead changes keep the contest unpredictable.',
'Mehrere Führungswechsel im Spielverlauf.':'Several lead changes during the game.','Die Führung wechselt im Verlauf der Partie mehrfach.':'The lead changes several times.',
'Eine deutliche Aufholjagd prägt das Spiel.':'A major comeback shapes the game.','Eine größere Aufholjagd bringt zusätzliche Spannung.':'A significant comeback adds excitement.',
'Die Führung wechselt auch in der Schlussphase mehrfach.':'Multiple lead changes late in the game.','Mehrere späte Führungswechsel sorgen für Spannung.':'Late lead changes create suspense.',
'Spannende Phasen im letzten Viertel.':'Close stretches in the final quarter.','Im Schlussviertel bleibt die Partie zeitweise eng.':'The game stays close for stretches of the fourth quarter.',
'Mindest ein Platzverweis sorgt für zusätzliche Emotionen.':'An ejection adds drama.','Mindestens ein Platzverweis sorgt für zusätzliche Emotionen.':'An ejection adds drama.',
'Ein Platzverweis bringt zusätzliche Brisanz ins Spiel.':'An ejection adds intensity.',
'Mehrere technische oder unsportliche Fouls sorgen für Aufregung.':'Multiple technical or flagrant fouls add drama.','Wiederholte technische oder unsportliche Fouls bringen zusätzliche Brisanz.':'Repeated technical or flagrant fouls add intensity.',
'Detaildaten-Status:':'Detailed data status:','Spiele ·':'Games ·','beendet':'final','Cache-Antworten':'cached responses','Abruf':'retrieved',
'NBA-Spiel-ID nicht eindeutig zugeordnet':'NBA game ID could not be matched','NBA Play-by-Play nicht abrufbar':'NBA play-by-play unavailable','auch ESPN-Spielaktionen nicht verfügbar':'ESPN play-by-play also unavailable',
'Siege aus':'wins in','Spielen':'games','Ø Punktedifferenz':'avg. point differential',
'Star-Faktor':'Star factor','Einzelleistung':'Individual performance'
};
const replacements=Object.entries(D).sort((a,b)=>b[0].length-a[0].length);
let lang='de';try{lang=localStorage.getItem('hooprate_language')==='en'?'en':'de'}catch{}
const originals=new WeakMap(),rendered=new WeakMap();
function translate(str){let s=str;for(const [de,en] of replacements)if(s.includes(de))s=s.split(de).join(en);return s}
function apply(root=document.body){
 if(!root)return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let n;while(n=walker.nextNode()){
  if(n.parentElement?.closest('script,style'))continue;
  const current=n.nodeValue;
  if(rendered.has(n)&&current!==rendered.get(n))originals.set(n,current);
  else if(!originals.has(n))originals.set(n,current);
  const original=originals.get(n);
  const next=lang==='en'?translate(original):original;
  if(next!==current)n.nodeValue=next;
  rendered.set(n,next);
 }
 for(const el of root.querySelectorAll('[aria-label], [title]'))for(const attr of ['aria-label','title']){
  if(!el.hasAttribute(attr))continue;
  const key='i18n'+attr,old=el.dataset[key]||el.getAttribute(attr);
  if(!el.dataset[key])el.dataset[key]=old;
  el.setAttribute(attr,lang==='en'?translate(old):old);
 }
 document.documentElement.lang=lang;
 const picker=document.getElementById('languageSwitch');if(picker)picker.value=lang;
}
let pending=false;const observer=new MutationObserver(()=>{if(!pending){pending=true;queueMicrotask(()=>{pending=false;apply()})}});
observer.observe(document.body,{subtree:true,childList:true,characterData:true});
const picker=document.getElementById('languageSwitch');if(picker)picker.addEventListener('change',()=>{lang=picker.value==='en'?'en':'de';try{localStorage.setItem('hooprate_language',lang)}catch{}apply()});
apply();
})();