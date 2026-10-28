# HoopRate – Monetarisierungsmodell und Markteinführung

**Stand:** 28. Oktober 2026  
**Status:** Verbindliche strategische Leitlinie für die spätere Umsetzung. **Noch keine Zahlungs- oder Werbefunktionen implementieren.**

## 1. Produktprinzip
HoopRate hilft NBA-Fans, die sehenswertesten Spiele spoilerfrei und unkompliziert auszuwählen. **Free ist ohne Konto sofort nutzbar.** Premium ist ein **intelligent personalisierter NBA-Relive-Assistent**, kein bloßer Zugang zur Grundbewertung.

Bei Entscheidungen, die von dieser Strategie abweichen, vor der Umsetzung darauf hinweisen und die Abweichung begründen.

## 2. HoopRate Free
- Dauerhaft kostenlos, ohne Benutzerkonto und ohne Bezahlpflicht.
- Alle NBA-Spiele und HoopRate-Bewertungen; standardmäßig der letzte abgeschlossene Spieltag und Navigation zwischen Spieltagen.
- Grundlegender und strenger Spoilerschutz sowie spoilerarme Bewertungserklärungen bleiben kostenlos.
- Einfache, schnelle, auf iPhone und Tablet zuverlässige Benutzeroberfläche.
- Dezente Werbung, die die zentrale Spieleübersicht und den Spoilerschutz nicht beeinträchtigt; Einwilligungs- und Datenschutzanforderungen beachten.
- Fortgeschrittene persönliche Optionen können Premium vorbehalten bleiben; den Grundnutzen nicht hinter eine Paywall stellen.

## 3. HoopRate Season Pass – bevorzugtes Preismodell
- **Deutschland: 5,53 € einmalig pro laufender NBA-Saison.**
- **USA: 5,53 US-Dollar einmalig pro laufender NBA-Saison.**
- Herleitung: **7 relevante Saisonmonate × 0,79 € / 0,79 $**. Das ist eine Preisbegründung, **keine monatliche Abbuchung**.
- Zugang ab Kauf bis zum **Ende der jeweiligen NBA-Saison einschließlich Conference Finals und NBA Finals**. Der Preis orientiert sich an den spielstarken Monaten (ungefähr Oktober–April), obwohl die späteren Finals mit enthalten sind.
- **Keine automatische Verlängerung.** Für die nächste NBA-Saison wird bewusst neu gekauft.
- **Fairer reduzierter Preis bei spätem Einstieg** in die laufende Saison; genaue Stichtage und Preise vor Launch festlegen. Vorläufige *Beispielstaffel*: Oktober–Dezember 5,53 €/$, Januar–Februar 3,95 €/$, März–April 2,37 €/$; ab Mai vorerst keine neuen Saisonpässe. Staffelung noch nicht final entschieden.
- Ein zusätzliches monatlich kündbares Angebot zu **0,99 € / 0,99 $ pro Monat** wurde als flexible Alternative diskutiert, ist **nicht als verbindlicher Launch-Bestandteil festgelegt**. Nicht unbemerkt zum bisherigen reinen Monatsabo zurückkehren.
- Preis-, Steuer-, Zahlungsgebühren- und Wirtschaftlichkeitsprüfung vor Umsetzung; möglichst eine Zahlung pro Saison statt vieler Kleinsttransaktionen.

## 4. Premium-Mehrwert
- Vollständig werbefrei.
- Erweiterte persönliche Bewertungsoptionen, insbesondere individuelle Gewichtung von Spannung, Starleistungen und Spielqualität.
- Gespeicherte Vorlieben, persönliche Empfehlungen, Watchlist und „bereits gesehen“.
- Lieblingsmannschaften und Lieblingsspieler, optional später Benachrichtigungen ohne Spoiler.
- Sichere Speicherung, Wiederherstellung und gegebenenfalls Synchronisation über Geräte – hierfür kann in Premium ein Benutzerkonto nötig sein.
- Diese Funktionen sind **Produktziele**, keine Behauptung über bereits fertige Features.

## 5. Entwicklungsprioritäten
1. **Jetzt: Free perfektionieren.** Stabiler NBA-Datenimport mit Fehlerbehandlung, verlässliche und nachvollziehbare Bewertungen, Spoilerschutz, letzter abgeschlossener Spieltag als Startseite, Spieltag-Navigation, mobile/iPhone-Stabilität.
2. **Danach: Personalisierung vorbereiten.** Gewichtungsoptionen, zunächst lokale Speicherung ohne Benutzerkonto.
3. **Dann: Premium-Mehrwert prototypisieren.** Watchlist, gesehen-Markierung, Favoriten, persönliche Empfehlungen; mit Nutzern testen.
4. **Erst später: Monetarisierung bauen.** Saisonpass, sichere serverseitige Berechtigungsprüfung, Bezahlung, gegebenenfalls Konten und Geräte-Synchronisation, dezente Werbung.
5. **Markteinführung und Wachstum.** Deutschland und USA mit deutscher und englischer Oberfläche; Nutzerbindung und tatsächliche Zahlungsbereitschaft messen.

Keine übereilte Paywall oder komplexe Zahlungsinfrastruktur vor validiertem Free-Nutzen.

## 6. Märkte und technische/rechtliche Voraussetzungen
- Gleichzeitig **Deutsch und Englisch**, Vermarktung in **Deutschland und den USA**; USA als Hypothese für größeres Skalierungspotenzial.
- Browsersprache automatisch vorschlagen, manuelle Sprachwahl erhalten, korrekte lokale Preise und Datumsformate.
- Zahlungsanbieter und sichere serverseitige Prüfung des Saisonpass-Zugangs einrichten; GitHub Pages allein ist dafür nicht ausreichend.
- Umsatzsteuer, unterschiedliche Zahlungsgebühren, Rechnungsstellung, Datenschutz/Einwilligung, Verbraucherrechte, Nutzungsbedingungen und Datenquellen-/API-Lizenzen vor Launch prüfen.
- Auch laufende Kosten für Backend, NBA-Datenversorgung, Wartung und Support berücksichtigen; nicht nur Hosting und Transaktionsgebühren.

## 7. Wiedervorlage
**Bei allen Architektur- und Produktentscheidungen:** Free einfach halten; Premium über Personalisierung statt Grundfunktionen differenzieren. Bei Arbeiten an Zahlungsfunktionen, Benutzerkonten oder Werbung diese Notiz und [Issue #1](https://github.com/doitkrby/HoopRate/issues/1) konsultieren.

**Wichtig:** Das frühere Modell „0,99 €/$ monatlich mit automatischer Verlängerung als Hauptprodukt“ ist **durch den Saisonpass ersetzt**.
