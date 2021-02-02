import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

        //huomaa ero kulupito layouttiin.huom styles.
        //styles.item_data tuo tyylimääritelmät nyt.
        //classname auttaa yksilöimään tyylittelyt.
        //ole tarkkana item nimien eroissa vrt kulupito.
        //muista laittaa nimi joka paikkaan missä opettaja käyttää sitä.
        //styles.item on sama
        //styles.item_data on sama
        
function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_treeni}>Kuntosali treeni</div>
                <div className={styles.item_pvm}>Päivämäärä</div>
                <div className={styles.item_liike1}>treeni liike 1, toistomäärä</div>
                <div className={styles.item_liike2}>treeni liike 2, toistomäärä</div>
                <div className={styles.item_liike3}>treeni liike 3, toistomäärä</div>
                <div className={styles.item_liike4}>treeni liike 4, toistomäärä</div>
                <div className={styles.item_liike5}>treeni liike 5, toistomäärä</div>
                <div className={styles.item_liike6}>treeni liike 6, toistomäärä</div>
                <div className={styles.item_liike7}>treeni liike 7, toistomäärä</div>
                <div className={styles.item_tauko}>taukojen pituus sarjojen välissä</div>
            </div>
             <div className={styles.item_edit}>
                <NavigateNextIcon />
             </div>
        </div>
          
    );
}

export default Item;