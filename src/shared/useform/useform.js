//TÄHÄN TULEE REACT HOOKS
//palauttaa arvoja ja funktioita mitä voi myöhemmin käyttää
//setValues, se on "values" muokkaamista varten

import { useState } from 'react';

const useForm = (callback, initialState={}, resetOnSubmit=true) => {

    //esitellään useState-hook, johon käyttäjän lomakkeelle
    //syöttämä tieto tallennetaan
   const  [values, setValues] = useState(initialState);

   /*event.preventDefault(); , estetään lomakkeen tietojen
   eteen päin vieminen = lomake sivun uudelleenlataus.
   handlesubmit kutsuu määriteltyä callback funktiota.
   resetOnSubmit = kun uusi kulupito on kirjattu formiin (submit), 
   niin lomake tyhjenee, jotta voit helposti kirjoittaa seuraavan*/
   const handleSubmit = (event) => {
       if (event) {
           event.preventDefault();
       }
       callback();
       if (resetOnSubmit) resetValues();
   }

   //Syötekäsittelijä, joka tallentaa kentän tiedot 
   //sen nimellä state-muuttujaan.
   const handleChange = (event) => {
       event.persist();
       // Tallennetaan kenttään syötetty arvo välimuuttujaan.
       let value = event.target.value;
       //tallennetaan uusi arvo state-muuttujaan.
       setValues(values => ({...values, [event.target.name]: value}));
   }

   //funktio joka palauttaa lomakkeen tiedot alkutilanteeseen.
   const resetValues = () {
       setValues(initialState);
   }

//palauttaa luonnin yhdeydessä sekä käsittelijät että 
//state-muuttuja.   
    return {
        handleSubmit,
        handleChange,
        resetValues,
        setValues,
        values
    };

}

export default useForm;