import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

/*alla oleva const sisältää yksilöidyn tunnisteen,
alla olevan const ansiosta firebase toimii kuten kuuluukin.
Se on kopioitu firebasesta project settings osiosta.
Firebase SDK snippet -osio, valintana "config"*/
const firebaseConfig = {
  apiKey: "AIzaSyBLyPIxmcnjkeOlepOxzDVfFGQC6Xyrnnk",
  authDomain: "treeni-25a50.firebaseapp.com",
  projectId: "treeni-25a50",
  storageBucket: "treeni-25a50.appspot.com",
  messagingSenderId: "545083692602",
  appId: "1:545083692602:web:f3f62ddc703b008f848703",
  measurementId: "G-RTNEVCZWV1"
};
//App on kääritty <FirebaseAppProvider> tägien sisälle, eli 
//sovellus käyttää firebasen kaikkia ominaisuuksia.
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
