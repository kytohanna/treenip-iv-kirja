import styles from './motivation.module.scss';

//FIKSAA TOI KUVA ET SE OIKEASTI NÄKYISI TUOLLA SIVULLA"!!!

function Motivation(props) {
    return (
        <div className={styles.motivation}>
            <h2>Motivaatio kuva</h2>
            <h3>Arnold Swarchenegger</h3>
             <div><img src="https://wallpaperaccess.com/full/1834349.jpg" alt="" /></div>
              
        </div>
    )
}

export default Motivation;

//kulupidossa on settings -kansio, täällä on sen sijaan motivation -kansio.
//settings kansio = motivation
//settings.js = motivation.js
//settings.module.scss = motivation.module.scss
