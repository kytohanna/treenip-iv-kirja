import Item from '../item';
import Button from '../../shared/uibuttons';

function Items(props) {
    return (
       <div>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Button>LISÄÄ UUSI RIVI</Button>
       </div>
    );
}

export default Items;