# HoopRate – Monetarisierungsmodell und Markteinführung

**Stand:** 28. Oktober 2026  
**Status:** Festgehaltene Produktstrategie für eine spätere Entwicklungsphase. **Noch nicht umsetzen.**

## 1. Grundidee
HoopRate zeigt NBA-Fans schnell und spoilerarm, welche Spiele sich zum (Nach-)Anschauen lohnen. Das einfache Kernerlebnis soll kostenlos bleiben. Erweiterte Einstellungen und Werbefreiheit werden als günstiges Premium-Abonnement angeboten.

## 2. Free-Version
- **Kostenlos, ohne Registrierung, ohne Benutzerkonto und ohne Abonnement.**
- NBA-Spiele des vergangenen Spieltags mit HoopRate-Bewertungen anzeigen; Navigation zwischen Spieltagen und grundlegender Spoiler-Schutz bleiben erhalten.
- Die erweiterten **„Optionen“** in der kostenlosen Version ausblenden beziehungsweise nicht zugänglich machen. Konkreter Funktionsumfang ist vor Launch final festzulegen.
- **Dezente Werbung** über eine Schnittstelle zu geeigneten Werbeanbietern/Ad-Networks; kein störender Eingriff in die zentrale Spieleliste oder spoilerfreie Nutzung.

## 3. Premium-Version
- **Deutschland: 0,99 € pro Monat.**
- **USA: 0,99 US-Dollar pro Monat.**
- **Monatliches, automatisch verlängerndes Abonnement.**
- **Jederzeit kündbar; der Zugang bleibt bis zum Ende der bereits bezahlten aktuellen Abrechnungsperiode erhalten.** Danach erfolgt keine weitere Verlängerung.
- Premium enthält die erweiterten **„Optionen“**, persönliche Einstellungen und **Werbefreiheit**.
- Ob ein Premium-Benutzerkonto zwingend ist, wie Gerätewechsel unterstützt werden und wie der Kaufstatus wiederhergestellt wird, ist technisch noch auszugestalten.

## 4. Sprache und Vermarktung
- **Zeitgleicher Launch auf Deutsch und Englisch.**
- **Geplante Zielmärkte: Deutschland und USA.**
- Hypothese des Gründers: **In den USA könnte HoopRate besonders stark wachsen**, da die NBA dort einen besonders großen Heimatmarkt hat. Vor dem Launch mit Nutzertests und Marktkennzahlen validieren.
- Sprache möglichst automatisch aus Browsereinstellung erkennen; manuell umschaltbar. Preise und rechtliche Texte passend zu Markt/Abrechnung bereitstellen.

## 5. Technische Umsetzung – später
- Frontend für beide Sprachen (Internationalisierung/i18n) vorbereiten.
- Sichere Zahlungsabwicklung mit Unterstützung für wiederkehrende Abos, Kündigung und Zugangsprüfung („Entitlements“) einrichten. GitHub Pages allein bietet hierfür kein sicheres Backend.
- Premium-Status zuverlässig serverseitig prüfen; Premium-Funktionen nicht allein durch versteckte UI-Elemente schützen.
- Werbeintegration nur in Free und möglichst zurückhaltend; Cookie-/Datenschutz- und Einwilligungsvorgaben für Deutschland/EU sowie relevante US-Vorgaben berücksichtigen.
- Vertrags- und Verbraucherschutzpflichten zu Abos und Kündigung in beiden Zielmärkten rechtlich prüfen; Steuern, Währungsdarstellung, Zahlungsgebühren und App-/Web-Zahlungsmodell klären.

## 6. Priorität / Wiedervorlage
**Jetzt:** HoopRate-Qualität, stabile NBA-Daten, sinnvolle und spoilerfreie Bewertungen, Übersichtlichkeit und mobile Nutzung verbessern.

**Später bei Monetarisierungsplanung:** Dieses Dokument und GitHub-Issue #1 wieder aufgreifen. Preis, Funktionsgrenzen, Datenschutz, Zahlungsanbieter, rechtliche Texte und Vermarktungsstrategie vor dem Launch finalisieren.

**Hinweis:** Die 0,99 € / $ sind die vorgesehenen monatlichen Abonnementpreise, nicht einmalige Zahlungen.
