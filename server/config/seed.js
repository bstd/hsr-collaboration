/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');
var Order = require('../api/order/order.model');

Order.find({}).remove(function () {
  console.log('finished cleaning orders');
});
Product.find({}).remove(function () {
  Product.create({
      ean: 'A1234567890123',
      name: 'St.Galler Klosterbräu 33cl',
      vol: '5%',
      active: true,
      price: '3.00',
      info: 'Das St.Galler Klosterbräu. Ein Spezialitätenbier mit Charakter und Geschichte. Denn bereits auf dem St.Galler Klosterplan des Jahres 820 waren drei Brauereien zu finden. Das St.Galler Klosterbräu knüpft direkt an diese lange Tradition an. So wird es nach alter Rezeptur gebraut. Das Resultat: Ein unfiltriertes Bier von leuchtender Amberfarbe, das eine treue Fangemeinde gefunden hat.',
      stock: '20',
      vanity: 'Naturtrübes Bier',
      country: 'Schweiz',
      image: 'Klosterbraeu_Fl-Glas.jpg'
    }, {
      ean: 'A2345678901234',
      name: 'Gallus 612 50cl',
      vol: '5%',
      active: true,
      price: '4.40',
      info: 'Ein Bier, wie es auch Gallus gemundet hätte. Denn Gallus 612 ist eine Hommage an den Biergenuss zu St.Gallens Gründungszeiten. Gebraut mit feinstem Smaragd-Aromahopfen, mit Wacholder gewürzt und mit original obergäriger Ale-Hefe vergoren. Die Reifung auf Eichenholz vollendet den einzigartigen Trinkgenuss der Gallus-Spezialität.',
      stock: '10',
      vanity: 'Pale Ale',
      country: 'Schweiz',
      image: 'gallusbier_web.jpg'
    }, {
      ean: 'A3456789012345',
      name: 'Edelspez Premium 33cl',
      active: true,
      price: '4.00',
      info: 'Ein schmackhaftes Bier, das seinen Namen verdient. Das Edelspez Premium wird von unserem Braumeister aus hochwertiger, zweizeiliger Sommergerste und Hopfen der allerbesten Aromasorten gebraut. Das traditionelle und sorgfältige Brauverfahren sorgt für ein herrlich frisches Genusserlebnis. Ohne Frage, das Edelspez Premium ist das Bier für Geniesser – und die besonderen Momente im Leben.',
      stock: '10',
      vanity: 'Spezialbier',
      country: 'Schweiz',
      image: 'edelspez_web.jpg'
    }, {
      ean: 'A4567890123456',
      name: 'Weisser Engel 50cl',
      vol: '5%',
      active: true,
      price: '3.70',
      info: 'Ein himmlischer Genuss mit weisser Krone. Ein St.Galler Bier mit bayerischer Seele. Der Weisse Engel ist ein echtes, naturtrübes Weissbier, gebraut nach dem bayerischen Reinheitsgebot von 1516. Seinen typischen und feinen Geschmack verdankt dieses Weizenbier hochwertigen Rohstoffen, wie feinstem Weizenmalz und der Gärung mit reingezüchteter, obergäriger Bierhefe.',
      stock: '12',
      vanity: 'Weizenbier (Weissbier)',
      country: 'Schweiz',
      image: 'WeisserEngel.jpg'
    }, {
      ean: 'A5678901234567',
      name: 'Heineken Flasche 33cl',
      vol: '5%',
      active: true,
      price: '3.50',
      info: 'Das Heineken Bier hat eine Erfolgsgeschichte hinter sich, wie kein anderes Bier. Man kann sagen es ist eines der bekanntesten Biere der Welt. Ein traditionsreiches Bier und im Gegensatz zu anderen weniger bitter und herb. Das Heineken ist ideal für gelegentliche Bier-Geniesser aber auch echte Bier-Kenner.',
      stock: '12',
      vanity: 'Lagerbier',
      country: 'Holland',
      image: '8114d62aa01b476a66a59bc805c0b95c'
    }, {
      ean: 'A6789012345678',
      name: 'Becks 33cl',
      vol: '5%',
      active: true,
      price: '3.00',
      info: 'Der unnachahmliche Charakter und die herbe Frische von Beck\'s sind Resultate einer Unternehmenskultur, die stets innovativ und nach vorne denkt. Diese Innovationen haben zum Erfolg der Marke Beck\'s beigetragen.',
      stock: '22',
      vanity: 'Lagerbier',
      country: 'Deutschland',
      image: '41067f9885cf87fda65d30a4f1ee39cf'
    }, {
      "ean":"A854239865098",
      "active":true,
      "name":"Singha 33cl",
      "vol":"5%",
      "price":"4.00",
      "info":"Untergäriges thailändisches Bier mit altern. Getreidesorten.",
      "stock":"111",
      "vanity":"Mais-, Reisbier",
      "country":"Asien",
      "image":"49ec0e2ffd209990106ccd87d17b93d5"
    },
    {
      "ean":"A9857342709","active":true,"name":"Red Strip 33cl","vol":"4.7%","price":"5.00","info":"Das ausgelassenste aller Biere, wie das Leben auf Jamaica.\r\nDuft und Aroma sind sehr dezent und vor allem malzig.\r\nFast bitterfrei damit die Frische im Gaumen bleibt.","stock":"22","vanity":"Festbier (Bockbier)","country":"Andere","modificationDate":{"$date":1450001313487},"image":"9989ed4e158c1e85d8ac3b7feccded69"
    },{
      "ean":"A39832741987","active":true,"name":"Feldschlösschen Alkoholfrei 33cl","vol":"0.1%","price":"3.50","info":"Feldschlösschen Alkoholfrei - der Klassiker ohne Alkohol. Mit seinem bierigen, harmonischen Geschmack garantiert Feldschlösschen Alkoholfrei immer und überall vollen Biergenuss ganz ohne Alkohol. Eine Erfrischung nach Mass.","stock":"44","vanity":"Alkoholfreies Bier","country":"Schweiz","modificationDate":{"$date":1450001730059},"image":"91057379bbeff3daafc9e8fe4e5aea34"
    },{
      "ean":"A08546098787","active":true,"name":"Brew Dog PUNK IPA 33cl","vol":"5.7","price":"6.50","info":"Wie der Name bereits sagt handelt es sich bei dem Brewdog Punk IPA um ein India Pale Ale. Die Entstehung der IPAs ist schon fast legendär. Um das Bier im 19. Jahrhundert haltbar zu machen für die lange Reise von England und Schottland in die indischen Kolonien musste Bier mit einem möglichst hohen Alkohol- und Hopfengehalt gebraut werden, sonst wäre es während der Überfahrt verdorben. Aus dieser Tradition heraus ist auch das Brewdog Punk IPA entstanden.","stock":"10","vanity":"Pale Ale","country":"Britannien","modificationDate":{"$date":1450002131269},"image":"15e52c389b700aa4185c31831c224a0a"
    },{
      "ean":"A0973425770977","active":true,"name":"Brew Dog Hardcore 33cl","vol":"9.2%","price":"8.00","info":"Die Steigerung eines IPAs präsentieren wir euch hier mit dem Brewdog Hardcore IPA. Für dieses Bier wird noch einmal wesentlich mehr Hopfen verwendet als bei einem normalen IPA. Daher ist das Brewdog Hardcore IPA auch vom Hopfenanteil und den Bittereinheiten her das stärkste Bier in Großbritannien. Sagenhafte 150 Bittereinheiten (IBU) kann das Hardcore IPA vorweisen. Zum Vergleich ein normales Pils hat etwa 20-30 Bittereinheiten (IBU).","stock":"15","vanity":"Craft","country":"Britannien","modificationDate":{"$date":1450002303006},"image":"e7b26593350662a7bf70e1381cfe7a6a"
    },{
      "ean":"A89980709342579","active":true,"name":"Insite Oast 50cl","vol":"5.2%","price":"8.50","info":"Im Glas besticht das Insite Oast zunächst durch seine klare bernsteinartige Farbe. Auch der weiße cremige Schaum des Bieres hält sich lange im Glas. In der Nase lassen sich dann Zitronenaromen und auch leicht süßliche Hopfenaromen erkennen. Geschmacklich wird das Bier dann besonders durch die sehr starken Hopfennoten dominiert. Daher lässt sich kaum noch Malzgeschmack wahrnehmen. Neben der süßlichen Trockenheit besticht das Bier vor allem durch eine milde Bitterheit.","stock":"5","vanity":"Stout","country":"Kanada","modificationDate":{"$date":1450002475753},"image":"334cb6e757cf82d5536596fb1dd0d289"
    },{
      "ean":"A341897952398798","active":true,"name":"Bridgeroad 33cl","vol":"4.5%","price":"4.50","info":"Das bernsteinfarbene Bier für den Hopfen-Fan. Der exklusive australische Galaxy-Hopfen verleiht ihm seine einzigartige und fruchtig-feinherbe Aromatik.","stock":"20","vanity":"Altbier","country":"Andere","modificationDate":{"$date":1450002649977},"image":"e62bb4396a89ec251ba822d0573b60a9"
    },{
      "ean":"A4578993425z798","active":true,"name":"FAXE Premium Lager 100cl","vol":"5%","price":"6.00","info":"FAXE Premium is a classic premium lager with a soft and distinctive flavour. The combination of the finest malt, hops and our own water results in a beer with a rich, yet mild and smooth taste. An attractive, balanced lager.","stock":"20","vanity":"Holzfassgereifte Biere","country":"Dänemark","modificationDate":{"$date":1450002812941},"image":"014cc9fcc3c88c2448b7191c6a907e56"
    },{
      "ean":"A89752398475","active":true,"name":"INDIO Bier 35cl","vol":"4.5%","price":"3.50","info":"A Lager-type beer with an amber hue and a distinctive light caramel-malt taste. ","stock":"20","vanity":"Biermischgetränke","country":"Mexico","modificationDate":{"$date":1450003097083},"image":"594d0063f66231c30f6ecf7fee5dc292"
    },{
      "ean":"A129080542310","active":true,"name":"Budweiser Budvar 33cl","vol":"5%","price":"3.50","info":"Bierstil: European-Style Mild Lager\r\nGold, Heu, Butter, Brot, Getreide, mittelkräftig, dezent herb im Finish","stock":"10","vanity":"Holzfassgereifte Biere","country":"Tschechien","modificationDate":{"$date":1450003258671},"image":"a85008b7a1d3ddf04a315ea9f197b068"
    },{
      "ean":"A99567876549876","active":true,"name":"GUINNESS Special Export 33cl","vol":"8%","price":"6.50","info":"Schwarz, intensives Malz, Toast, Karamell, bitter-süss, rund und bekömmlich","stock":"8","vanity":"Starkbier","country":"Irland","modificationDate":{"$date":1450003424854},"image":"65e32599251f38d179d6626529eecc22"
    },{
      "ean":"A786543982509273495","active":true,"name":"Leffe Brun 33cl","vol":"6.5%","price":"5.50","info":"Bierstil: Belgian-Style Tripel\r\nDunkelbraun, Toast, Karamell, Nuss, Malz, ausgewogen und rund, elegant","stock":"15","vanity":"Mehrkornbier","country":"Belgien","modificationDate":{"$date":1450003559700},"image":"2f2642e1fab7a087b6eb033a2c7d193a"
    },{
      "ean":"A987425359807","active":true,"name":"COORS Light 33cl","vol":"4%","price":"3.50","info":"Bierstil: German-Style Leichtbier\r\nHellgelb, sanftes Malz, leichter Hopfen, Getreide, schlank und rank, leicht","stock":"15","vanity":"Kohlenhydratarmes Bier","country":"USA","modificationDate":{"$date":1450003744360},"image":"a64cfc62691f65c6c214c813fe42ab6b"
    },
    {
      "ean":"A555999028094","active":true,"name":"Molson Canadian 33cl","vol":"5%","price":"4.50","info":"Hellgelb, hopfenbetont, blumig, ausgewogen, mild und erfrischend","stock":"35","vanity":"Lagerbier","country":"Kanada","modificationDate":{"$date":1450003913090},"image":"d532b20228cffaf68c46a1dd60219ab6"
    },{
      "ean":"A78652349856","active":true,"name":"Modelo Especial Bier 33cl","vol":"4.2%","price":"4.50","info":"Modelo Especial ist ein hochwertiges Bier nach Pilsner Brauart, das in Mexiko hergestellt wird.\r\nEin ideales Bier, um es zu jeder Tageszeit zu genießen.\r\nEs handelt sich um ein von Natur aus attraktives Bier, das sowohl durch seinen Anblick, als auch durch seinen Geschmack überzeugt.\r\nModelo Especial ist das Bier zum gemeinsamen Erleben der wichtigen Dinge des Lebens.","stock":"4","vanity":"Leichtbier (alkoholarm)","country":"Mexico","modificationDate":{"$date":1450004167164},"image":"76d77fe8c0a32cc9511555837236e39e"
    },{
      "ean":"A87542387963452","active":true,"name":"Quöllfrisch naturtrüb 50cl","vol":"4.8%","price":"3.40","info":"Aus Pilsenermalz und drei verschiedenen Hopfensorten aus Stammheim und der Hallertau gebraut, entsteht ein aussergewöhnlich fruchtiges Bier mit hefigem Charakter.","stock":"70","vanity":"Naturtrübes Bier","country":"Schweiz","modificationDate":{"$date":1450004355558},"image":"4a8e6f199c98b8e45295aa25547c64c0"
    },{
      "ean":"A897452498375342","active":true,"name":"Vollmond Bier hell 33cl","vol":"5.2%","price":"7.60","info":" Ebenfalls in der Vollmondnacht gebraut, aber filtriert. Die aromatische Hopfenblume wirkt im Abgang leicht zitronig.","stock":"35","vanity":"Lagerbier","country":"Schweiz","modificationDate":{"$date":1450004479217},"image":"f3b2313b1df8dfc9c025e69777dd6b9b"
    },{
      "ean":"A897523409587432","active":true,"name":"Hopster Hopfenlimo 25cl","vol":"0.1%","price":"5.00","info":"HOPSTER ist die weltweit erste alkoholfreie Hopfenlimo – mit dem Besten aus dem Hopfen, nur ohne Bitterstoffe und auch nicht so süss. Eben ganz einfach ein gutes Getränk mit dem vollen, blumig-fruchtigen Hopfengeschmack … Da hopfst di nieder!","stock":"3","vanity":"Alkoholfreies Bier","country":"Deutschland","modificationDate":{"$date":1450004720805},"image":"ceae243a67decea161d2714fa20030fb"
    },{
      "ean":"A9908743527980","active":true,"name":"Brew Dog Jack Hammer 33cl","vol":"6.5%","price":"6.50","info":"Gebraut wird das Brewdog Jack Hammer aus den Hopfensorten Centennial und Columbus. Erstmals eingebraut wurde das Bier im Jahr 2012. Damals allerdings noch als Prototyp. Da es aber beim Brewdog Personal so gut ankam wird es jetzt regelmäßig eingebraut.","stock":"12","vanity":"Porter","country":"Andere","modificationDate":{"$date":1450006419016},"image":"9c1e6e4f7e7471c6511af6432368acd9"
    },{
      "ean":"A8754329869876","active":true,"name":"Grolsch Bügelflasche 45cl","vol":"5%","price":"6.00","info":"Bierstil: German-Style Helles / Lager\r\nStrohgelb, schön gehopft, herb, Meeresbrise, sehr erfrischend","stock":"13","vanity":"Lagerbier","country":"Holland","modificationDate":{"$date":1450006695314},"image":"a6aaca72ad6e78229b57a9b498d182fb"
    },
    {
      "ean":"A665637736","active":true,"name":"KILKENNY Beer 33cl","vol":"4.7%","price":"3.50","info":"Kilkenny Irish Beer schmeckt angenehm nach geröstetem Malz, ein wenig wie Röstbrot. Die vollmundige Weichheit des Biers macht es einfach zu trinken. Die Süsse wird von einer abschliessenden Bitterkeit hervorragend abgewogen.","stock":"24","vanity":"Schwarzbier","country":"Irland","modificationDate":{"$date":1450006555405},"image":"65220f86563635c25d167660c93b06c6"
    },
    {
      "ean":"A897523409587433","active":true,"name":"Alesmith Speedway Stout","vol":"12%","price":"20.50","info":"A huge Imperial Stout that weighs in at an impressive 12% ABV! As if that\'s not enough, Alesmith added pounds of coffee for a little extra kick! Speedway Stout is jet black, with an off-white head. Starts with a strong coffee and dark chocolate sensation, then fades to a multitude of toasty, roasted and caramel malt flavours. Clean and crisp, full- bodied. Warmth from the high alcohol content lightens up the feel. You won't fool your taste buds - this beer is HUGE! Ingredients: water, barley, hops, yeast.","stock":"6","vanity":"Stout","country":"USA","modificationDate":{"$date":1450006555405},"image":"alesmith-speedway.png"
    },
    {
      "ean":"A897523409587434","active":true,"name":"Stone IPA","vol":"6.9%","price":"9.00","info":"By definition, an India pale ale is hoppier and higher in alcohol than its little brother, pale ale—and we deliver in spades. Now one of the most well-respected and best-selling IPAs in the country, this golden beauty explodes with citrusy, piney hop flavors and aromas, all perfectly balanced by a subtle malt character. This crisp, extra hoppy brew is hugely refreshing on a hot day, but will always deliver no matter when you choose to drink it.","stock":"6","vanity":"Pale Ale","country":"USA","modificationDate":{"$date":1450006555405},"image":"stone-ipa.png"
    },
    {
      "ean":"A897523409587435","active":true,"name":"Stone Ruination DIPA","vol":"8.5%","price":"12.50","info":"Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. As craft beer has evolved over the years, so too have techniques for maximizing hop flavors and aromas. For the second incarnation of our groundbreaking India pale ale, we employed dry hopping and hop bursting to squeeze every last drop of piney, citrusy, tropical essence from the hops that give this beer its incredible character. We\'ve also updated the name to Stone Ruination Double IPA 2.0 to reflect the imperial-level intensity that\'s evident in every sip. Join us in cheering this, the second stanza in our 'Liquid Poem to the Glory of the Hop.'","stock":"6","vanity":"Pale Ale","country":"USA","modificationDate":{"$date":1450006555405},"image":"stone-ruination.png"
    },
    {
      "ean":"A897523409587436","active":true,"name":"Stone Imperial Russian Stout","vol":"10.6%","price":"14.50","info":"Stone Imperial Russian Stout is so thick, rich and, well, sinful, you might worry that you'll be doomed to the fiery pits just for thinking about a sip. Rest assured, however, that even though this seemingly pernicious brew is indeed as black as sin, we guarantee that no actual sin was committed in making it...you\'ll have to add that on your own. This massive and intensely aromatic beer abounds with notes of chocolate, coffee, black currants, anise and roastiness, and its heavy palate is nothing to be trifled with.","stock":"6","vanity":"Stout","country":"USA","modificationDate":{"$date":1450006555405},"image":"stone-irs.png"
    },
    {
      "ean":"A897523409587437","active":true,"name":"Lost Abbey Angels Share","vol":"12.50%","price":"30.00","info":"Down in Kentucky and across the pond in Scotland, distillers who age their whiskeys for many years refer to the evaporation of the spirits from their barrels as \'The Angel\'s Share.\' We couldn\'t agree more. Each time a barrel is filled, a measure of liquid seeps into the oak and is lost for good. This striking Strong Ale is brewed with copious amounts of Caramel malt to emphasize the vanilla and oak flavors found in freshly emptied bourbon or brandy barrels. The beer spends a year in oak before it is packaged for release.","stock":"6","vanity":"Holzfassgereifte Biere","country":"USA","modificationDate":{"$date":1450006555405},"image":"la-angelshare.png"
    },
    {
      "ean":"A897523409587438","active":true,"name":"Lost Abbey Red Poppy Ale","vol":"5%","price":"29.00","info":"Perhaps no country embraces the use of fruit in beers more so than Belgium. Numerous traditional as well as regional specialty ales are infused with every sort of fruit imaginable. In this way, the flavor of the fruit becomes especially prominent. Red Poppy Ale is a veritable celebration of Sour Cherries in an explosion of aromas and tastes. Brewed from a brown ale base and aged in our oak barrels for over 6 months, this beer is not for the faint of heart. The Golden Poppy is the state flower of California and the Red Poppy is found in Flanders Fields where our inspiration for this beer comes from.","stock":"6","vanity":"Spezialbier","country":"USA","modificationDate":{"$date":1450006555405},"image":"la-poppy.png"
    },

    function () {
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

