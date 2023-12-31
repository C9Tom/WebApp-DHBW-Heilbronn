# Anleitung zum starten der WebApp

## Schritt 1: ZIP-Datei herunterladen

Lade die ZIP-Datei, die die WebApp enthält aus diesem GitHub Profil herunter. Oder Klone die Datei um direkt zu Schritt 3 zu springen.

## Schritt 2: ZIP-Datei extrahieren

1. **Windows:**
   - Klicke mit der rechten Maustaste auf die ZIP-Datei.
   - Wähle "Alle extrahieren..." aus dem Kontextmenü.
   - Wähle das Zielverzeichnis für die extrahierten Dateien und klicke auf "Extrahieren".

2. **Mac:**
   - Doppelklicke auf die ZIP-Datei. Das Betriebssystem extrahiert automatisch den Inhalt.

3. **Linux:**
   - Öffne ein Terminal.
   - Navigiere zum Verzeichnis, in dem sich die ZIP-Datei befindet.
   - Verwende den Befehl `unzip <WebApp-DHBW-Heilbronn-main.zip>`.

## Schritt 3: Öffnen der `index.html`-Datei im Browser

1. Navigiere in das extrahierte Verzeichnis, dass den Projektinhalt enthält.
2. Suche nach der `index.html`-Datei.
3. Klicke mit der rechten Maustaste auf die `index.html`-Datei.
4. Wähle "Öffnen mit" und wähle deinen bevorzugten Webbrowser aus der Liste aus.

Alternativ:
- Öffne deinen Webbrowser.
- Wähle "Datei" > "Öffnen" und navigiere zum Pfad der `index.html`-Datei.

## Hinweis:

Stelle sicher, dass dein Webbrowser auf dem neuesten Stand ist, um eine optimale Darstellung der Webseite sicherzustellen. Bei Problemen oder zusätzlichen Anforderungen beachte auch eventuelle Anleitungen in der Projekt-Dokumentation.

## Funktionen

1. **"TRY MY IP"**
   - Klicke auf den "TRY MY IP" Button
   - Klicke auf den nicht Fett gedruckten Teil des Textes
   - Man wird auf die zugehörige Wikipedia Seite oder auf eine Aufschlüssige Google-Suche weitergeleitet
   - **AUSNAHMEN**
     - City: Beispieltext
       - Dropdown-Menü mit Auswahlmöglichkeit
         - Weather
           - Öffnet ein Modal-Fenster, welches Daten über das Aktuelle Wetter an der Position der IP-Adresse liefert
         -  Postal Code: Beispielpostleitzahl
           - Google-Suche nach:"Postal Code Beispielpostleitzahl"
     - Latitude: Beispieltext und Longitude: Beispieltext
       - Keine Funktion, da nicht für wichtig erachtet.

2. **"TRY A DIFFERENT IP"**
   - Klicke auf den "TRY A DIFFERENT IP" Button
   - Gebe eine IPv4 oder IPv6 Adresse in das Textfeld ein und drücke den Submit Button
     - Falls du keine IPv4 oder IPv6 Adresse eingegeben hast öffnet sich ein Modal-Fenster, welches dich auffordert eine IPv4 oder IPv6 Adresse einzugeben
     - Wenn man eine IPv4 oder IPv6 Adresse eingegen hat wird man auf den selben Screen wie bei "TRY MY IP" weitergeleitet

3. **Allgemeine Funktionen**
   - Drücke auf das Logo oben Links um auf die Homepage zu kommen
   - Drücke auf die drei Striche oben Rechts um ein Navigationsmenü zu öffnen
     - **Home**
       - Führt zur Homepage
     - **Get IP information**
       - Dropdown-Menü, welches zwei Auswahlmöglichkeiten besitzt
         - *My IP*
           - Führt zu **TRY MY IP**
         - *Any IP*
           - Führt zu **TRY A DIFFERENT IP**
     - **About us**
       - Führt zu About us Seite, welche die Beweggründe etc. beschreibt
