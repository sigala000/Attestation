import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    // alignItems: 'center',
    // marginRight: 20,
    // marginLeft:30,
    marginTop:100,
    
  },
  heading: {
    fontSize: 15,
    fontWeight:"bold",
    marginBottom: 20,
    textDecoration:"underline",
    textAlign:'center',
  },
  heading1: {
    fontSize: 12,
    fontWeight:"bold",
    textAlign:'center',
    marginBottom: 10,
    marginLeft:70,
    marginRight:70,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  randomText: {
    fontSize: 14,
  },
  txt:{
    fontSize:12,
    marginRight: 50,
    marginLeft:50,
  },
  txt1:{
    fontSize:12,
    marginRight: 50,
    marginLeft:50,
    marginBottom:20
  },
});

const PDFDocument = ({ name, date, matricule, compnam, compname, abbr, amt }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.heading}>Attestation de Dématérialisation</Text>
        <Text style={styles.heading}>des Valeurs Mobilieres Excercice 2023</Text>
        <Text style={styles.heading1}>Numero:{matricule} /CAA/DG/DDGAF/SDD/ {compnam}</Text>
        <Text style={styles.txt}>La Caisse Autonome d'Amortissement, Conservateur des Valeurs Mobilières non cotées, agissant en vertu de l'article trentième de la Loi de finances 2019</Text>
        <Text style={styles.txt1}>Attest que la {compname} en abrégé {abbr}, au capital de FCFA {amt}, N°RCCM: RC/DLA/1999/B/6468, NIU: M 0779 0000 1656 A a rempli les conditions fixées par l'AVIS N°001/CAA/DC du {date} à savoir:</Text>
              
                  <Text style={styles.txt}>1- La codification et l'inscription en compte des valeurs mobilières qu'elle a émises.</Text>
                  <Text style={styles.txt}> 2- Le dépôt des certificats physiques d'actions collectés auprès de ses actionnaires accompagnés des autorisations de destruction;</Text>
                  <Text style={styles.txt}>3- La transmission des modalités de tenue des comptes titres (copie de la convention de mandat signée avec une société de bourse agrée ou descriptif du logiciel de gestion titres acquis);</Text>
                  <Text style={styles.txt}>4- La transmission des extraits de compte générés au 31 décembre 2022 (Attestation de propriété, compte global d'émission, journal général des opérations, historique compte de chaque actionnaire, Tableau de suivi des actions en déshérence);</Text>
                  <Text style={styles.txt}>5- La transmission du registre des titres nominatifs à date;</Text>
                  <Text style={styles.txt1}>6-  Le règlement des commissions dues à la CAA (codification et inscription en compte. Opérations sur titres, Droit de garde annuel 2023).</Text>
              
                <Text style={styles.txt}>* Code adhérent : 5181</Text>
                <Text style={styles.txt}>* Valeur: Action {abbr}</Text>
                <Text style={styles.txt}>* Code valeur (ISIN): CM 000 005181-3</Text>
                <Text style={styles.txt}>* Quantité titres collectés : 350 000 /350 000</Text>
                <Text style={styles.txt1}>* Teneur de comptes titres : {compname}</Text>
              
              <Text style={styles.txt}>En foi de quoi la présente attestation de dématérialisation, valable pour l'année 2023, lui est délivrée pour servir et valoir ce que de droit.</Text>
        {/*<Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Date: {date}</Text>
        <Text style={styles.randomText}>
          This is some random text inside the PDF document.
</Text>*/}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
