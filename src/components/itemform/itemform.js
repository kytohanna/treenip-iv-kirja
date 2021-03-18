import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

//submit = alert submit ja paluu takaisin etusivulle.
function ItemForm(props) {

   const history = useHistory();
   //stored.values.id , jos itemillä id, niin ok, muuten se luo sille uuden.

   const submit= () => {
      let storedvalues = Object.assign({}, values);
      storedvalues.amount = parseFloat(storedvalues.amount);
      storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
      props.onItemSubmit(storedvalues);
      history.push("/");
   }

//aloitustilanne lomakkeelle = tyhjä lomake:
//props.data ? , jos se on määritelty, sitä käytetään, muuten tyhjä.
   const initialState = props.data ? props.data : {
      type: "",
      kuntosaliDate: new Date().toISOString().substring(0,10),
      liike1: "",
      liike2: "",
      liike3: "",
      liike4: "",
      liike5: "",
      liike6: "",
      liike7: "",
      treeniPause: "",
   }

   //false = ei resetoida lomaketta
   const {values,handleChange, handleSubmit} = useForm(submit, initialState, false);
   //handleCancel = peruuta lomake submit - nappi
   const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
   }

   const handleDelete = (event) => {
      event.preventDefault();
      props.onItemDelete(values.id);
      history.push("/");
   }

/*treenityypin kohdalla tapahtuisi muutoksia, mutta ei ole valikko-ominaisuutta,kuten kulupidossa
joten se ei koske omapitoa. */
    return (
     <div>
        <form onSubmit={handleSubmit}>
           <div className={styles.form}>

             <div className={styles.form_row}>
                 <div>
                     <label htmlFor="type">Treeni tyyppi </label>
                     <input type="text" name="type" onChange={handleChange} value={values.type} required/>
                 </div>
             </div>
             <div className={styles.form_row}>
                 <div>
                    <label htmlFor="kuntosaliDate">Päivämäärä </label>
                    <input type="date" name="kuntosaliDate" onChange={handleChange} value={values.kuntosaliDate}/>
                 </div>
             <div className={styles.form_row}>
                 <div>
                    <label htmlFor="liike1">treeniliike 1 </label>
                    <input type="text" name="liike1" onChange={handleChange} value={values.liike1} />
                 </div>
            </div>
            </div>
            <div className={styles.form_row}>
                 <div>
                    <label htmlFor="liike2">treeniliike 2 </label>
                    <input type="text" name="liike2" onChange={handleChange} value={values.liike2} />
                 </div>
              </div>
            <div className={styles.form_row}>                 
                 <div>
                    <label htmlFor="liike3">treeniliike 3 </label>
                    <input type="text" name="liike3" onChange={handleChange} value={values.liike3} />
                 </div> 
                </div>       
            <div className={styles.form_row}>         
                 <div>
                    <label htmlFor="liike4">treeniliike 4 </label>
                    <input type="text" name="liike4" onChange={handleChange} value={values.liike4}/>
                 </div>
               </div>
            <div className={styles.form_row}>                
                 <div>
                    <label htmlFor="liike5">treeniliike 5 </label>
                    <input type="text" name="liike5" onChange={handleChange} value={values.liike5} />
                 </div>
               </div>    
            <div className={styles.form_row}>             
                 <div>
                    <label htmlFor="liike6">treeniliike 6 </label>
                    <input type="text" name="liike6" onChange={handleChange} value={values.liike6} />
                 </div>
             </div>
            <div className={styles.form_row}>                 
                 <div>
                    <label htmlFor="liike7">treeniliike 7 </label>
                    <input type="text" name="liike7" onChange={handleChange} value={values.liike7} />
                 </div>
            </div>
            <div className={styles.form_row}>
                 <div>
                    <label htmlFor="treeniPause">tauon pituus </label>
                    <input type="text" name="treeniPause" onChange={handleChange} value={values.treeniPause}/>
                 </div>
            </div>

            <div className={styles.form_row}>
                 <div>
                    <Button onClick={handleCancel}>PERUUTA</Button>
                 </div>
                 <div>
                    <Button primary type="submit">{props.data ? "TALLENNA": "LISÄÄ" }</Button>
                 </div>
               </div>

               <div className={styles.form_row}>
                  <div>
                     <Button onClick={handleDelete}>POISTA</Button>
                  </div>
                  <div></div>
                </div>
           </div>
        </form> 
     </div>
    );
}
/*htmlFor nimet on samat kuin muuttujissa. 
TODELLA TÄRKEÄÄ NIMETÄ OIKEIN. MYÖHEM. ONGELMIA MUUTEN!!!!*/

/*Jos tekisit lomakkeeseen option ominaisuuden <input>:iin. On tärkeä olla 
myös value="asiannimi". Katso mallia kulupito valikon vesi, sähkö - vaihtoehdoista.
props.data ? "TALLENNA": "LISÄÄ"
-> jos on props.data, niin tulee eka teksti näkyviin, muuten jälkim.
Button handleCancel, se on peruuta-nappi. Jos olet kirjoittamassa uutta merkintää treenikirjaan
ja et haluakaan laittaa sitä, painat peruuta-nappia.
Button handleDelete, nappi jolla poistat olemassa olevan merkinnän
Button handleCancelin alla on ylimääräiset <div></div> merkinnät,
sen ansiosta nappi ei ole koko ruudun levyinen vaan sellainen kaunis.
puolikkaan ruuudun pituinen (kts ohjelma niin tajuat)*/
export default ItemForm;