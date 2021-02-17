import './uibuttons.css';

const Button = (props) => {
    return (
       <button type="button" classname="uibutton" {...props}/>
    );
}



export { Button as default, Button }