import { Link } from 'react-router-dom';
import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {
//key={item.id}, jotta ohjelma ei valita turhasta.
    const items = props.data.map((item) => <Item key={item.id} data={item} />);
    
    return (
        <ButtonContainer>
       <div>
           { items }
           <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
       </div>
       </ButtonContainer>
    );
}
/*link to, yhdistää additem ominaisuuden nappiin.
 Eli nappia painamalla pääset välilehteen "addItem"*/
export default Items;