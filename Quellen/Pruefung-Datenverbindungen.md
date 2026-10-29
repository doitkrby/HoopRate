# HoopRate: Prüfung der Datenverbindungen (29.10.2026)

## Ergebnis
**Keine Freigabe bestätigt.** Die aktuelle technische Erreichbarkeit von NBA- und ESPN-Endpunkten belegt keine Erlaubnis zur systematischen automatisierten Verarbeitung oder Veröffentlichung. Auch bei privatem, nicht kommerziellem Einsatz ist die konkrete Nutzung der APIs nicht ausdrücklich freigegeben.

### Geprüfte Verbindungen im HoopRate-Code
- `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/`: Scoreboard, Spielzusammenfassungen, Team-Leader, Kader, Verletzungen.
- `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/statistics/byathlete`: historische Spielerdaten/Leaderboards.
- `https://cdn.nba.com/static/json/staticData/`: Spielplan und IDs.
- `https://cdn.nba.com/static/json/liveData/`: Play-by-Play.
- GitHub Pages: statisches Hosting, keine eigene Datenlizenz.

## Offizielle Quellen
- NBA Nutzungsbedingungen, Stand 13. Juli 2026: https://www.nba.com/termsofuse – insbesondere Abschnitte 1 und 9 (private/nichtkommerzielle Nutzung, Statistiken, Datensammlung, Play-by-Play).
- NBA Stats FAQ: https://www.nba.com/stats/help/faq – Statistiken sind nicht zum Download bereitgestellt, auch nicht für private oder akademische Zwecke.
- Disney Terms (allgemein): https://disneytermsofuse.com/english/ – Beschränkungen zur gewerblichen und automatisierten Nutzung.
- Disney TDM-Rechtevorbehalt: https://tv.disney.de/ki-text-und-data-mining-gesetzlich-beschrankt
- GitHub Pages: https://docs.github.com/de/site-policy/github-terms/github-terms-for-additional-products-and-features

## Bewertung
- **NBA-CDN:** Derivative Score-Verarbeitung und automatisierter Play-by-Play-Bezug sind durch die allgemeinen Bedingungen nicht eindeutig autorisiert. Keine pauschale Zusicherung für private Hobbyprojekte.
- **ESPN:** Keine ausdrückliche API-Nutzungslizenz für HoopRate verifiziert. Disneys allgemeine Bedingungen legen Zurückhaltung nahe. Die konkrete Anwendbarkeit auf die zugänglichen ESPN-Endpunkte ist nicht abschließend geklärt.
- **GitHub Pages:** Nichtkommerzielle Hobby-Website grundsätzlich vorgesehen; von Datenrechten unabhängig.
- Einzelne Tatsachen (Spieldatum, Ergebnis, Spielername) können anders zu beurteilen sein als eine systematische Datenbankübernahme bzw. API-Nutzung.

## Empfohlene Maßnahmen
1. **Keine Monetarisierung, Werbung oder Verbreitung als öffentliches Produkt** vor Klärung.
2. ESPN und NBA um **schriftliche Erlaubnis** für das beschriebene kleine, kostenfreie Hobbyprojekt bitten: automatischer Abruf abgeschlossener Spiele, Boxscores und Play-by-Play, Berechnung eigener Scores, GitHub-Pages-Veröffentlichung, kleiner Freundeskreis, ohne Werbung.
3. Bis zur Antwort keine rechtliche Sicherheit behaupten. Wer das Risiko vollständig vermeiden möchte, deaktiviert automatisierte Abrufe bis zur Freigabe.
4. Falls nötig, auf explizit lizenzierte Datenquellen umstellen; Quelle, Vollständigkeit und Scoring-Parität prüfen.
5. Rechtliche Prüfung durch fachkundige Beratung bei verbindlicher Freigabeentscheidung.

**Status:** Recherche abgeschlossen; **keine schriftliche Genehmigung eingeholt**. Kein Ersatz für Rechtsberatung.
