import styles from './header.module.scss';

function Header() {
    return (
       <div className={styles.header}>
           Kuntosali treenit
       </div>
    );
}

export default Header;

/*Olen kopioinut kansiorakenteen opettajan näyttämästä alkuperäisestä mallista.
Teimme ensin opettajan mallin mukaisesti "kulupito"-ohjelman ja sitten tein perässä
samojen ohjeiden mukaisesti myös tämän "omapito"-nimisen ohjelman. 
Kutsun tätä myöskin kirjanpito ohjelmaksi. 

Tämä tiedosto pitää sisällään nimensä mukaisesti headerin. Ohjelman yläosan, jossa on myöskin
sovelluksen otsikko tai siis nimi.*/