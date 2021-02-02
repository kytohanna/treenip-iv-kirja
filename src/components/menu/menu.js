import styles from './menu.module.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
//voit muokkaa ulkonäkö vaihtamalla ikoneja.
function Menu() {
    return (
      <div className={styles.menu}>
          <div><ViewListIcon /></div>
          <div><TimelineIcon /></div>
          <div><SettingsIcon /></div>
      </div>
    );
}

export default Menu;