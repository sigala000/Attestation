const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
    
  doc.text(`Numero 1234567CAA/DDGAF/SDD`);
  doc.text("Yaounde le 34/34/34");
  doc.text(`Monsieur le Directeur General`);
  doc.text(`BELGOCAM SA`);
  doc.text(`BP13288 DOUALA`);
  doc.text(`V/NIU M120200015863T`);
  doc.text(`N/NIU MO89500009102A`);
  doc.text(`Objet:Facture Numero 2345/02/23/CAA`);
  doc.text(`DATE`);
  doc.text(`ASSIETE`,);
  doc.text(`TAUX`,);
  doc.text(`MONTANT`,);
  doc.text(`12345`,);
  doc.text(`TVA`,);
  doc.text(`TOTAL TTC`,);
  doc.text(`Arrêtée la présente facture à la somme de francs CFA 345`,);
  doc.text(`payable par chèque certifié à l'ordre de la Caisse Autonome d'Amortissement`,);
  doc.text(`par virement bancaire à la Standard Chartered Bank au compte << CAA FONCTIONNEMENT » n°10004 00200 04020066308 46.`,);
  doc.text(`Pour le Directeur General et par delegation Le Directeur de la Dématérialisation et de la Gestion des Actifs Financiers p.i`);
  doc.text(`ALIM Fadimatou epse DIAW`,);
doc.pipe(fs.createWriteStream('facture.pdf'));
doc.end();
