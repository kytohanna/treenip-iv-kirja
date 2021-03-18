import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
        
function Item(props) {

//alla olevat 2x const mahdollistaa kalenteri muodon pvm valinnalle
//ONKO TOI TREENIDATE OIKEA JUTTU?
const locale = "fi-FI";
const kuntosaliDate = new Date(props.data.treeniDate).toLocaleDateString(locale);

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_treeni}>{props.data.type}</div>
                <div className={styles.item_pvm}>{kuntosaliDate}</div>
                <div className={styles.item_liike1}>{props.data.liike1}</div>
                <div className={styles.item_liike2}>{props.data.liike2}</div>
                <div className={styles.item_liike3}>{props.data.liike3}</div>
                <div className={styles.item_liike4}>{props.data.liike4}</div>
                <div className={styles.item_liike5}>{props.data.liike5}</div>
                <div className={styles.item_liike6}>{props.data.liike6}</div>
                <div className={styles.item_liike7}>{props.data.liike7}</div>
                <div className={styles.item_tauko}>{props.data.treeniPause}</div>
            </div>
             <div className={styles.item_edit}>
               <Link to={"/edit/"+props.data.id}>< NavigateNextIcon /></Link>
             </div>
        </div>
          
    );
}

        //huomaa ero kulupito layouttiin.huom styles.
        //styles.item_data tuo tyylimääritelmät nyt.
        //classname auttaa yksilöimään tyylittelyt.
        //ole tarkkana item nimien eroissa vrt kulupito.
        //muista laittaa nimi joka paikkaan missä opettaja käyttää sitä.
        //styles.item on sama
        //styles.item_data on sama kuin "Kulupito"-esimerkissä

/*item.js tiedosto pitää sisällään kirjanpidon yksittäisten merkkausten sisältämät tiedot.
Ensin tulee merkinnän nimi, pvm, sitten treeniliikkeet 1-7 ja tauon pituus.
kuten jokaisessa muussakin componentsin alakansiossa, item-kansio pitää sisällään itseään
koskevat tyylimääreet. yllä olevan funktion sisältö saa tyylinsä tiedostosta ./item.module.scss 
item.js on yksi sovelluksen sivuista ja sille on oma ikoni sovelluksen alapalkissa(footer).
ikonin tuonti näkyy tämän sivun yläosassa toisessa import -lauseessa.
*/

export default Item;