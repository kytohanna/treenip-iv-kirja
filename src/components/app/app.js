import { BrowserRouter as Router, Route} from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import AddItem from '../../routes/additem';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
import testdata from '../../testdata.js';

function App() {
  return (
    <ButtonAppContainer>
     <div className={styles.app}>
     <Router>
       <Header />
        <Content>
         <Route exact path="/">
          <Items data={testdata}/>
         </Route>
         <Route path="/stats">
            <Stats/>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/add">
            <AddItem />
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

//OO TARKKANA. KATSO ONKO KAIKKI REITITYKSET OIKEIN. '../../routes/Items' TUOTTI PÄÄN VAIVAA
export default App;
