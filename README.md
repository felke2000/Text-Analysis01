Titel
=====
	Programmieraufgabe Vostellungsgespräch
	Textanalyseprogramm auf einem vorgegebenen Text
	Webapplikation/Konsolenprogramm

Informationen:
==============
	Aufgabe: Textanalyse
	Autor: Zsolt Feleki
	Datum 31.03.2022

Aufgabe
=======
	Der Programm nimmt einen vorgegebenen Text entgegen und analysiert dessen Inhalt
	bezüglich Buchstaben und Satzzeichen.


Ordnerstruktur und Komponenten
==============================
	1. html01.html : html file
	2. loesung.js  : javascript code
	3. readme.md   : dieses File

Softwarelösung
==============
	Für das Lösen der Aufgabe wurde Javascript mit HTML ausgewählt. Die Benutzerinteraktionen
	wurden mit von HTML DOM Events abgefangen. Eine Lösung mit dieser Auswahl könnte nicht mit 
	OOP durchgeführt werden, da die einzelne DOM Elemente bereits im HTML definiert sind und 
	aus Javascript manipuliert werden können.


Beschreibung der Benutzeroberfläche
===================================
	Die Benutzeroberfläche besteht aus 7 Buttons und einen Textausgabefeld. Zuerst muss die
	angegebene Daten text01.txt über der Button Choose File ausgewählt werden. Dadurch wird auch
	der Inhalt des Files eingelesen und für Analysen zur Verfügung gestellt.
	Es folgt einen Textfeld wo die Resultate der Analysen dargestellt werden.
	Die einzelnen Analysen werden durch das Klicken auf die Buttos durchgeführt:

	1. Text ausgeben                        : Ausgabe der File auf dem Textfeld
	2. Anzahl je Buchstabe                  : Es zählt die Anzahl Buchstaben welche vorkommen, getrennt nach Gross- oder Kleinbuchstaben
	3. Alle Buchstaben zu Kleinbuchstaben   : Ersetzt alle Grossbuchstaben mit Kleinbuchstaben
	4. Anzahl Buchstaben und Satzzeichen    : Es zählt alle Buchstaben und Satzzeichen
	5. Anzahl Buchstaben und Satzzeichen
	6. Alle Satzzeichen entfernen		: Es entfernt alle Satzzeichen

	Die Analysen können mehrmals nacheinander ausgeführt werden.

	

