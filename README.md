# Projekt2 Entwurf

## Voraussetzungen

* Node.js - [Node.js](https://nodejs.org/) - empfohlene Version (Windows): v0.12.x
  * unter Windows gibt es noch zusätzliche Abhängigkeiten, siehe [Node.js Installation](https://github.com/nodejs/node-v0.x-archive/wiki/Installation) oder [node-gyp Problematik](https://github.com/nodejs/node-gyp/issues/629)
* MongoDB - [MongoDB](http://www.mongodb.org/downloads) - `mongod` gestartet, getestet mit v3.0.

## Installation

```bash
$ npm i
$ bower install
```

## Start

```bash
$ grunt serve:dist
```

## Hinweise
* nicht geeignet für den Produktiveinsatz (Zertifikate und Verschlüsselung sind out of scope)
* pro environment (dev|test|prod) wird in separate DB geschrieben, und je nach config geseeded
* TODO was passiert mit neu erfassten Daten? seeded collections (users, products)-> überschrieben (check details for product case)
* `grunt serve` für Test der develop Version (env=development)
* `grunt serve:debug` für "debugging-friendly environment"


## Testen
* `grunt test:client` für clientside Tests
* `grunt test:server` für serverside Tests
* `grunt test:e2e` für end-to-end Tests. Braucht vorher allerdings `npm run update-webdriver`. Bei Problemen hilft [protractor tutorial -> setup](https://github.com/angular/protractor/blob/master/docs/tutorial.md)

