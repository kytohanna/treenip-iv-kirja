import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {
//key={item.id}, jotta ohjelma ei valita turhasta.
    const items = props.data.map((item) => <Item key={item.id} data={item} />);
    
    return (
        <ButtonContainer>
       <div>
           { items }
           <FloatingButton secondary>+</FloatingButton>
       </div>
       </ButtonContainer>
    );
}

export default Items;