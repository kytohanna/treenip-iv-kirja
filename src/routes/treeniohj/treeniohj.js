import styles from './treeniohj.module.scss';

function TreeniOhj(props) {
    return (
        <div className={styles.treeniohj}>
            <div>
            <h2>Treeniohjelma</h2>

            <h4>Kuukauden aikana: </h4> 
            <p>Treenaa 2 viikkoa kovempaa</p>
            <p>Treenaa 2 viikkoa kevyemmin</p> 
            </div>
<div></div>
            <div >
            <h4>Tavoitteet: </h4>
            <p>Korona hidastaa treenikehitystä, joten sillä mennään mitä on.</p>
            <p>Penkki: ylitä 20kg</p>    
            <p>Mave: ylitä 32kg</p>
            <p>Kyykky: maksimi?.</p>
            <p>kulmasoutu: ylitä 10kg</p>
            </div>
<div></div>
            <div >
            <h4>Ohjelman perus ajatus:</h4>
            <p>Treenaa viikossa 2 kertaa. Vuorotellan kahta eri kokovartalo treeniä.</p>
            <p>1. mave + penkki</p>
            <p>2. kyykky + kulmasoutu</p>
            <p>1. ja 2. treenien nimet tulevat niissä olevien isojen liikkeiden perusteella</p>
            <p>Yhdistä treeneihin oheisliikkeitä mielenkiintosi mukaan: </p>
            <p>hausikääntö,ojentajat, ylätalja, istumaannousu, punnerrus...</p>
            <p>Pidä pääpaino treenien isoissa liikkeissä.</p>
            </div>
        </div>
      );
}



//stats= treeniohj
//function Stats = function TreeniOhj
//stats.js = treeniohj.
//stats.module.scss = treeniohj.module.scss


/*
Kirjoita ylös vaikka treeniohjelma 
tai treeniohjelmat tai joku sellainen.
kun muokkaat statsien nimen ja kuvakkeen, tee se fiksusti, jooko. älä ole dum dum */

export default TreeniOhj;