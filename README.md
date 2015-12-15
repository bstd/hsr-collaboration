# Projekt2 Entwurf

## Voraussetzungen

* Node.js - [Node.js](https://nodejs.org/) - empfohlene Version (Windows): v0.12.x
  * unter Windows gibt es noch zusätzliche Abhängigkeiten, siehe [Node.js Installation](https://github.com/nodejs/node-v0.x-archive/wiki/Installation) oder [node-gyp Problematik](https://github.com/nodejs/node-gyp/issues/629)
* MongoDB - [MongoDB](http://www.mongodb.org/downloads) (getestet mit v3.0)
* `mongod` gestartet

## Installation

```bash
$ npm i
$ bower install
```

## Start

```bash
$ grunt serve:dist
```

## Benutzer
* bestehender Testbenutzer
  * E-Mail: test@test.com
  * Passwort: test
* bestehender Administrator
  * E-Mail: admin@admin.com
  * Passwort: admin

## Hinweise
* nicht geeignet für den Produktiveinsatz (Zertifikate und Verschlüsselung sind out of scope)
* pro environment (dev|test|prod) wird in eine separate DB geschrieben, und je nach config geseeded
* TODO was passiert mit neu erfassten Daten? seeded collections (users, products)-> überschrieben (check details for product case)
* `grunt serve` für Starten der develop Version (env=development)
* `grunt serve:debug` für Starten eines "debugging-friendly environment"


## Testen
* `grunt test:client` Tests client-side 
* `grunt test:server` Tests server-side 
* `grunt test:e2e` für end-to-end Tests. Braucht vorher allerdings `npm run update-webdriver`. Bei Problemen hilft [protractor tutorial -> setup](https://github.com/angular/protractor/blob/master/docs/tutorial.md)

