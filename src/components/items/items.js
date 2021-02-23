import Item from '../item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {
    return (
        <ButtonContainer>
       <div>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <FloatingButton>+</FloatingButton>
       </div>
       </ButtonContainer>
    );
}

export default Items;