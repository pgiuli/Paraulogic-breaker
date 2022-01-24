//A script by Spork. Paraulogic-breaker
//<3


const { errorMonitor } = require("events");
var fs = require("fs");
const { traceDeprecation } = require("process");

//Input list of words from file
var paraules = fs.readFileSync("paraules.txt").toString();

//Split list onto array
paraules = paraules.split("\n");

var lletres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


//Input letters to sort by
var lletraPrincipal = ['E'];
var lletresAdicionals = ['S', 'U', 'P', 'F', 'R', 'L'];


//Remove selected letters from array of rejected letters
const Rebuig1 = lletres.filter((lletra) => !lletra.includes(lletresAdicionals[0]));
const Rebuig2 = Rebuig1.filter((lletra) => !lletra.includes(lletresAdicionals[1]));
const Rebuig3 = Rebuig2.filter((lletra) => !lletra.includes(lletresAdicionals[2]));
const Rebuig4 = Rebuig3.filter((lletra) => !lletra.includes(lletresAdicionals[3]));
const Rebuig5 = Rebuig4.filter((lletra) => !lletra.includes(lletresAdicionals[4]));
const Rebuig6 = Rebuig5.filter((lletra) => !lletra.includes(lletresAdicionals[5]));
const RebuigFinal = Rebuig6.filter((lletra) => !lletra.includes(lletraPrincipal));

var lletresRebuig = RebuigFinal;


const tePrincipal = paraules.filter((paraula) => paraula.includes(lletraPrincipal));

var ambPrincipal = tePrincipal;


//Remove words that include rejected letters
const TreureRebuig1 = ambPrincipal.filter((paraula) => !paraula.includes(lletresRebuig[0]));
const TreureRebuig2 = TreureRebuig1.filter((paraula) => !paraula.includes(lletresRebuig[1]));
const TreureRebuig3 = TreureRebuig2.filter((paraula) => !paraula.includes(lletresRebuig[2]));
const TreureRebuig4 = TreureRebuig3.filter((paraula) => !paraula.includes(lletresRebuig[3]));
const TreureRebuig5 = TreureRebuig4.filter((paraula) => !paraula.includes(lletresRebuig[4]));
const TreureRebuig6 = TreureRebuig5.filter((paraula) => !paraula.includes(lletresRebuig[5]));
const TreureRebuig7 = TreureRebuig6.filter((paraula) => !paraula.includes(lletresRebuig[6]));
const TreureRebuig8 = TreureRebuig7.filter((paraula) => !paraula.includes(lletresRebuig[7]));
const TreureRebuig9 = TreureRebuig8.filter((paraula) => !paraula.includes(lletresRebuig[8]));
const TreureRebuig10 = TreureRebuig9.filter((paraula) => !paraula.includes(lletresRebuig[9]));
const TreureRebuig11 = TreureRebuig10.filter((paraula) => !paraula.includes(lletresRebuig[10]));
const TreureRebuig12 = TreureRebuig11.filter((paraula) => !paraula.includes(lletresRebuig[11]));
const TreureRebuig13 = TreureRebuig12.filter((paraula) => !paraula.includes(lletresRebuig[12]));
const TreureRebuig14 = TreureRebuig13.filter((paraula) => !paraula.includes(lletresRebuig[13]));
const TreureRebuig15 = TreureRebuig14.filter((paraula) => !paraula.includes(lletresRebuig[14]));
const TreureRebuig16 = TreureRebuig15.filter((paraula) => !paraula.includes(lletresRebuig[15]));
const TreureRebuig17 = TreureRebuig16.filter((paraula) => !paraula.includes(lletresRebuig[16]));
const TreureRebuig18 = TreureRebuig17.filter((paraula) => !paraula.includes(lletresRebuig[17]));
const TreureRebuig19 = TreureRebuig18.filter((paraula) => !paraula.includes(lletresRebuig[18]));


//Set final array of approoved words in array
var llistatFinal = TreureRebuig19;


//Logging amount of words per category
//console.log(paraules.length);
//console.log(ambPrincipal.length);
//console.log(lletres.length);
//console.log(lletresAdicionals);
//console.log(RebuigFinal.length);
//console.log(llistatFinal.length);

const llistatAText = llistatFinal;
let llistatEscrit = llistatAText.toString();


//Saving file with allowed words for later use.
fs.writeFile('allowed.txt', llistatEscrit, function (err) {
  if (err) return console.log(err);
  console.log('Error saving file. Delete previous one and run again.');
});