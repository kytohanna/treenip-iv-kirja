import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';


function ItemForm(props) {

   const history = useHistory();

   const submit= () => {
      alert("SUBMIT!");
      history.push("/");
   }
//aloitustilanne lomakkeelle = tyhjä lomake:
   const initialState = {
      type: "",
      kuntosaliDate: "",
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

    return (
     <div>
        <form onSubmit={handleSubmit}>
           <div className={styles.form}>

             <div className={styles.form_row}>
                 <div>
                     <label htmlFor="type">Treeni tyyppi </label>
                     <input type="text" name="type" onChange={handleChange} value={values.type} />
                 </div>
             </div>
             <div className={styles.form_row}>
                 <div>
                    <label htmlFor="kuntosaliDate">Päivämäärä </label>
                    <input type="date" name="kuntosaliDate" onChange={handleChange} value={values.kuntosaliDate} />
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
                    <Button primary type="submit">LISÄÄ</Button>
                 </div>
               </div>
           </div>
        </form> 
     </div>
    );
}
/*htmlFor nimet on samat kuin muuttujissa. 
TODELLA TÄRKEÄÄ NIMETÄ OIKEIN. MYÖHEM. ONGELMIA MUUTEN!!!!*/
export default ItemForm;