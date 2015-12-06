/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');

Product.find({}).remove(function () {
  Product.create({
      ean: '1234567890123',
      name: 'St.Galler Klosterbräu',
      active: true,
      price: '16.00',
      info: 'Das St.Galler Klosterbräu. Ein Spezialitätenbier mit Charakter und Geschichte. Denn bereits auf dem St.Galler Klosterplan des Jahres 820 waren drei Brauereien zu finden. Das St.Galler Klosterbräu knüpft direkt an diese lange Tradition an. So wird es nach alter Rezeptur gebraut. Das Resultat: Ein unfiltriertes Bier von leuchtender Amberfarbe, das eine treue Fangemeinde gefunden hat.',
      stock: 20,
      vanity: 'Naturtrübes Bier',
      country: 'Schweiz',
      image: 'Klosterbraeu_Fl-Glas.jpg'
    }, {
      ean: '2345678901234',
      name: 'Gallus 612',
      active: true,
      price: '22.50',
      info: 'Ein Bier, wie es auch Gallus gemundet hätte. Denn Gallus 612 ist eine Hommage an den Biergenuss zu St.Gallens Gründungszeiten. Gebraut mit feinstem Smaragd-Aromahopfen, mit Wacholder gewürzt und mit original obergäriger Ale-Hefe vergoren. Die Reifung auf Eichenholz vollendet den einzigartigen Trinkgenuss der Gallus-Spezialität.',
      stock: 10,
      vanity: 'Pale Ale',
      country: 'Schweiz',
      image: 'gallusbier_web.jpg'
    }, {
      ean: '3456789012345',
      name: 'Edelspez Premium',
      active: true,
      price: '14.00',
      info: 'Ein schmackhaftes Bier, das seinen Namen verdient. Das Edelspez Premium wird von unserem Braumeister aus hochwertiger, zweizeiliger Sommergerste und Hopfen der allerbesten Aromasorten gebraut. Das traditionelle und sorgfältige Brauverfahren sorgt für ein herrlich frisches Genusserlebnis. Ohne Frage, das Edelspez Premium ist das Bier für Geniesser – und die besonderen Momente im Leben.',
      stock: 10,
      vanity: 'Pale Ale',
      country: 'Schweiz',
      image: 'edelspez_web.jpg'
    }, {
      ean: '4567890123456',
      name: 'Weisse Engel',
      active: true,
      price: '22.50',
      info: 'Ein himmlischer Genuss mit weisser Krone. Ein St.Galler Bier mit bayerischer Seele. Der Weisse Engel ist ein echtes, naturtrübes Weissbier, gebraut nach dem bayerischen Reinheitsgebot von 1516. Seinen typischen und feinen Geschmack verdankt dieses Weizenbier hochwertigen Rohstoffen, wie feinstem Weizenmalz und der Gärung mit reingezüchteter, obergäriger Bierhefe.',
      stock: 12,
      vanity: 'Weizenbier (Weissbier)',
      country: 'Schweiz',
      image: 'edelspez_web.jpg'
    }, {
      ean: '5678901234567',
      name: 'Heineken Flasche',
      active: true,
      price: '10.50',
      info: 'Das Heineken Bier hat eine Erfolgsgeschichte hinter sich, wie kein anderes Bier. Man kann sagen es ist eines der bekanntesten Biere der Welt. Ein traditionsreiches Bier und im Gegensatz zu anderen weniger bitter und herb. Das Heineken ist ideal für gelegentliche Bier-Geniesser aber auch echte Bier-Kenner.',
      stock: 12,
      vanity: 'Lager',
      country: 'Holland',
      image: 'heineken.jpg'
    }, {
      ean: '6789012345678',
      name: 'Becks',
      active: true,
      price: '18.00',
      info: 'Der unnachahmliche Charakter und die herbe Frische von Beck’s sind Resultate einer Unternehmenskultur, die stets innovativ und nach vorne denkt. Diese Innovationen haben zum Erfolg der Marke Beck’s beigetragen.',
      stock: 22,
      vanity: 'Lager',
      country: 'Deutschland',
      image: 'becks.jpg'
    }, function () {
      console.log('finished populating products');
    }
  );
});

User.find({}).remove(function () {
  User.create({
      email: 'test@test.com',
      password: 'test'
    }, {
      role: 'admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});

