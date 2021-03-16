import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
import testdata from '../../testdata.js';
//useEffect on efekti joka tapahtuu tietyssä tilanteessa
//kulupidossa tänne tehtiin muokkauksia,et tarvii niitä, sulla ei ole valikkoa sun ohjelmassa.
function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(testdata);
  }, []);

  const handleItemSubmit = (newitem) => {
    let storeddata = data.slice();
    const index = storeddata.findIndex(item => item.id === newitem.id);
    if (index >= 0 ) {
      storeddata[index] = newitem;
    } else {
      storeddata.push(newitem);
    }
//alla oleva lajittelee kirjanpito merkinnät uusimmasta vanhimpaan. uusin tulee ylimmäksi.
//paymentDate = kuntosaliDate
    storeddata.sort( (a,b) => {
       const aDate = new Date(a.kuntosaliDate);
       const bDate = new Date(b.kuntosaliDate);
       return bDate.getTime() - aDate.getTime();
    } );

    setData(storeddata);
  }
/*data.slice, kirjanpidon tiedoista tehdään identtinen kopio taulukkona
storeddata... rivi. filteröidään pois taulukosta ne merkinnät,joita 
ei haluta poistaa
!== on erisuuri merkki*/
  const handleItemDelete = (id) => {
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !== id)
    setData(storeddata);
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
            <TreeniOhj/>
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

/*kaikki sovelluksen osat kootaan tänne. Ja ne näkyvät sovelluksessa tässä järjestyksessä.
Kaikki sovelluksen osat on ensin importattu tänne ja sitten ne on merkattu function App - sisälle
haluttuun järjestykseen.
muokkaamalla app.js voit muokata layout järjestystä. */

//settings = motivation
//stats = treeniohj

//OO TARKKANA. KATSO ONKO KAIKKI REITITYKSET OIKEIN. '../../routes/Items' TUOTTI PÄÄN VAIVAA
export default App;
