# Projekt2 Entwurf

## Voraussetzungen

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Installation

```bash
$ npm i
$ bower install
$ grunt serve
```

## Hinweise
* nicht geeignet für den Produktiveinsatz (Verschlüsselung und end-to-end security sind out of scope)
* `grunt serve:dist` für Test der optimierten Version (concatenated, minified, ...)
* `grunt serve:debug` für "debugging-friendly environment"
* diese optimierte Version benutzt dieselbe Datenbank wie env=development

## Testen
* `grunt test:client` für clientside Tests (service: name(s) todo)
* `grunt test:server` für serverside Tests (api: name(s) todo)
* `grunt test:e2e` für end-to-end Tests (use case: name(s) todo), braucht vorher allerdings `npm run update-webdriver`
* `grunt test:coverage` für Testabdeckung

TODO
* env und db seeds

