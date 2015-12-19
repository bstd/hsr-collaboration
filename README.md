# Projekt2 Entwurf

## Voraussetzungen

* Node.js - [Node.js](https://nodejs.org/) - empfohlene Version (Windows): [v0.12.x](https://nodejs.org/dist/latest-v0.12.x/)
  * unter Windows gibt es noch zusätzliche Abhängigkeiten, siehe [Node.js Installation](https://github.com/nodejs/node-v0.x-archive/wiki/Installation) oder [node-gyp Problematik](https://github.com/nodejs/node-gyp/issues/629)
* MongoDB - [MongoDB](http://www.mongodb.org/downloads) (getestet mit v3.0)
* `mongod` gestartet
* SASS - [sass-lang](http://sass-lang.com/install)
  * unter Windows gibt es noch zusätzliche Abhängigkeiten, sind unter obigem Link dokumentiert

## Installation (-g installs ignorieren, falls bereits installiert)

```bash
$ npm i
$ npm i -g bower
$ bower install
$ npm i -g grunt-cli
```

## Start

```bash
$ grunt serve
```

## Benutzer
* bestehender Testbenutzer
  * E-Mail: test@test.com
  * Passwort: test
* bestehender Administrator
  * E-Mail: admin@admin.com
  * Passwort: admin

## Hinweise
* Nicht geeignet für den Produktiveinsatz (Zertifikate und Verschlüsselung sind out of scope).
* Pro environment (dev|test|prod) wird in eine separate DB geschrieben, und je nach config geseeded. D.h. geänderte Daten werden nach jedem Neustart durch die seeds überschrieben (Release/Daten-Management pro environment ist out of scope).
* Wenn aus versehen Bilder im "uploads" gelöscht werden, sind Ersatz im "backup" Ordner vorgesehen. Default Ordner ist für den Produktebild Platzhalter.
* Projekt Dokumente wie Wireframes und Usability Tests sind im Ordner "project-documents" abgelegt.
* Produkt Bilder müssen vom Admin vorher komprimiert und in einem quadratischem Format uploaded werden.
* `grunt serve:dist` für Starten der minified Version (env=prod).
  * hier sind wir in den letzten Wochen auf (kurzfristig) unlösbare Probleme gestossen, da $mdDialog (angular-material) in kürzlich erschienen Versionen in minifiziertem Code ein $injector:unpr Fehler wirft.
* `grunt serve:debug` für Starten eines "debugging-friendly environment".


## Testen
* `grunt test:client` Tests client-side 
* `grunt test:server` Tests server-side 
* `grunt test:e2e` für end-to-end Tests. Braucht vorher allerdings `npm run update-webdriver`. Bei Problemen hilft [protractor tutorial -> setup](https://github.com/angular/protractor/blob/master/docs/tutorial.md)

