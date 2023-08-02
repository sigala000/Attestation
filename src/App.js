import React, { useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

function App() {
  const [matricule, setMatricule] = useState('');
  const [date, setDate] = useState('');
  const [compnam, setCompnam] = useState('');
  const [compname, setCompname] = useState('');
  const [abbr, setAbbr] = useState('');
  const [amt, setAmt] = useState('');

 

  return (
    <div className="App">
      <h1>Attestation Generation</h1>
      <input
        type="number"
        placeholder="Enter the matricule"
        value={matricule}
        onChange={(e) => setMatricule(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enterr the date please"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the compnam"
        value={compnam}
        onChange={(e) => setCompnam(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the compname"
        value={compname}
        onChange={(e) => setCompname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the abbreviation"
        value={abbr}
        onChange={(e) => setAbbr(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the amount"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
      />
      
      <PDFDownloadLink
        document={<PDFDocument matricule={matricule} date={date} compnam={compnam} compname={compname} abbr={abbr} amt={amt}/>}
        fileName="Attestation.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
