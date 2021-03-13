import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import TimelineIcon from '@material-ui/icons/Timeline';
import MotivationIcon from '@material-ui/icons/Image';
//voit muokkaa ulkonäköä vaihtamalla ikoneja.
function Menu() {
    return (
      <div className={styles.menu}>
          <div><Link to="/"><ViewListIcon /></Link></div>
          <div><Link to="/stats"><TimelineIcon /></Link></div>
          <div><Link to="/motivation"><MotivationIcon /></Link></div>
      </div>
    );
}

//SettingsIcon = MotivationIcon

export default Menu;