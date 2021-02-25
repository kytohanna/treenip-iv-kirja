import styles from './content.module.scss';

function Content(props) {
    return (
       <div className={styles.content}>
           {props.children}
       </div>
    );
}

export default Content;

/*Tämän tiedoston tarkoitus on hieman mysteeri,
mutta uskon sillä olevan tärkeä rooli osana isompaa kokonaisuutta.
Se importtaa tyylit content-kansion sisällä olevasta .scss kansiosta
ja se sisältää funktion Content.  */