/*import tuo jotain muualta tähän tiedostoon.
import voi tuoda toisista tämän ohjelman kansioista tai tätä ohjelmaa 
varten ladatuista lisäosista/kirjastoista ominaisuuksia. */
//../ = yksi kansio ylöspäin
//../../ = kaksi kansiota ylöspäin
// /= kansio, esim /routes = routes kansio.
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import 'firebase/firestore';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import TreeniOhj from '../../routes/treeniohj';
import Motivation from '../../routes/motivation';
import AddItem from '../../routes/additem';
import EditItem from '../../routes/edititem';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
// import testdata from '../../testdata.js';

//kulupidossa tänne tehtiin muokkauksia,et tarvii niitä, sulla ei ole valikkoa sun ohjelmassa.
//function App sisältää kaiken appiin liittyvän
//jokaisessa kansionnimi.js tiedostossa on saman niminen function, joka sisältää kaiken olennaisen.
function App() {

  const [data, setData] = useState([]);

  const itemCollectionRef = useFirestore().collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("treeniDate","desc"), {initialData: [], idfield: "id"});

  //TARVIINKO ALLAOLEVAA? EI OLE TYYPPEJÄ OMAPIDOSSA????
  //OO VAROVAINEN KAIKKIEN "TYPE"- JUTTUJEN KANSSA: EI OLE TYYPPEJÄ OMAPIDOSSA
  //const typeCollectionRef = useFirestore().collection('type');
  //const { data: typeCollection } = useFirestoreCollectionData(typeCollectionRef.orderBy("type"), { initialData: []});


//useEffect on efekti joka tapahtuu tietyssä tilanteessa
  useEffect(() => {
    setData(itemCollection)
  }, [itemCollection]);

  //nimensä mukaisesti hoitaa uuden kirjanpito merkinnän luomisen, eli submittauksen.
  //jokainen submittaus luo uuden itemin eli merkinnän kirjanpitoon, 
  //jokaiselle itemille luodaan id, jotta sen tunnistaa omaksi yksilökseen.
  
    /*data.slice, kirjanpidon tiedoista tehdään identtinen kopio taulukkona
storeddata... rivi. filteröidään pois taulukosta ne merkinnät,joita 
ei haluta poistaa
!== on erisuuri merkki*/


  const handleItemSubmit = (newitem) => {
    //tämä korvaa ennen olleen pitkän rimpsun koodia:
    itemCollectionRef.doc(newitem.id).set(newitem);
  
    /* ---------------------------------------
    let storeddata = data.slice();
    const index = storeddata.findIndex(item => item.id === newitem.id);
    if (index >= 0 ) {
      storeddata[index] = newitem;
    } else {
      storeddata.push(newitem);
    } */

  } 

  const handleItemDelete = (id) => {
    itemCollectionRef.doc(id).delete();
    /*
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !== id)
    setData(storeddata);
    */
  }


//tännekin pieniä muokkauksia kulupidossa, omapidossa ei tarvitse.
//alla oleva pitää sisällään ohjelman rungon. Siis sen missä järjestyksessä kaikki on.
//ensin yläotsake eli header, sitten sisältö ja niin edelleen.
  return (
    <ButtonAppContainer>
     <div className={styles.app}>
     <Router>
       <Header />
        <Content>
         <Route exact path="/">
          <Items data={data}/>
         </Route>
         <Route path="/treeniohj">
            <TreeniOhj data={data}/>
          </Route>
          <Route path="/motivation">
            <Motivation />
          </Route>
          <Route path="/add">
            <AddItem onItemSubmit={handleItemSubmit}/>
          </Route>
          <Route path="/edit/:id">
             <EditItem onItemSubmit={handleItemSubmit} data={data} onItemDelete={handleItemDelete}/>
          </Route>
        </Content>
        <Menu />
       </Router>
     </div>
    </ButtonAppContainer>
  );
}

//TARVITSEEKO TREENIOHJ data={data} ??? 

/*kaikki sovelluksen osat kootaan tänne. Ja ne näkyvät sovelluksessa tässä järjestyksessä.
Kaikki sovelluksen osat on ensin importattu tänne ja sitten ne on merkattu function App - sisälle
haluttuun järjestykseen.
muokkaamalla app.js return -osiota, voit muokata layout järjestystä. */

//settings = motivation
//stats = treeniohj

export default App;
