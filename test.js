const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.text('Hello, world!');
doc.fontSize(24).text('Attestation de Dematerialisation');
  doc.fontSize(24).text('des Valeurs Mobilieres Excercice 2023');
  doc.text(`1234/CAA/DG/DDGAF/SDD/ asdfgh`);
  doc.text('La Caisse Autonome dAmortissement, Conservateur des Valeurs Mobilières non cotées, agissant en vertu de larticle trentième de la Loi de finances 2019');
  doc.text("Attest que la wer en abrégé DER au capital de FCFA 1234 N°RCCM: RC/DLA/1999/B/6468, NIU: M 0779 0000 1656 A a rempli les conditions fixées par l'AVIS N°001/CAA/DC du ${date} à savoir:");
  doc.text("1/La codification et l'inscription en compte des valeurs mobilières qu'elle a émises.");
  doc.text(" 2/Le dépôt des certificats physiques d'actions collectés auprès de ses actionnaires accompagnés des autorisations de destruction;");
  doc.text("3/La transmission des modalités de tenue des comptes titres (copie de la convention de mandat signée avec une société de bourse agrée ou descriptif du logiciel de gestion titres acquis);");
  doc.text("4/La transmission des extraits de compte générés au 31 décembre 2022 (Attestation de propriété, compte global d'émission, journal général des opérations, historique compte de chaque actionnaire, Tableau de suivi des actions en déshérence);");
  doc.text("5/La transmission du registre des titres nominatifs à date;")
  doc.text("6/Le règlement des commissions dues à la CAA (codification et inscription en compte. Opérations sur titres, Droit de garde annuel 2023)")
  doc.text("Code adhérent : 5181");
  doc.text("Valeur: Action ER");
  doc.text('Code valeur (ISIN): CM 000 005181-3');
  doc.text('Quantité titres collectés : 350 000 /350 000');
  doc.text("Teneur de comptes titres :ERET");
  doc.text('des Valeurs Mobilieres Excercice 2023');

  doc.text('En foi de quoi la présente attestation de dématérialisation, valable pour lannée 2023, lui est délivrée pour servir et valoir ce que de droit');



doc.pipe(fs.createWriteStream('output.pdf'));
doc.end();
