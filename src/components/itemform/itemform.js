import styles from './itemform.module.scss';

//KORJAA TÄSTÄ OIKEAN NÄKÖINEN!!!!!
//KATSO ONKO DIVIEN MÄÄRÄ OIKEIN????
//OLISI HYVÄ JOS Pvm OLISI SELLAINEN KIVAN NÄKÖINEN

function ItemForm(props) {
    return (
     <div>
        <form>
           <div className={styles.form}>

             <div className={styles.form_row}>
                 <div>
                     <label htmlFor="type">Treeni tyyppi </label>
                     <input type="text" name="type"></input>
                 </div>
             </div>
             <div className={styles.form_row}>
                 <div>
                    <label htmlFor="kuntosaliDate">Päivämäärä </label>
                    <input type="date" name="kuntosaliDate"/>
                 </div>
             <div className={styles.form_row}>
                 <div>
                    <label htmlFor="liike1">treeniliike 1 </label>
                    <input type="text" name="liike1"/>
                 </div>
            </div>
            </div>
            <div className={styles.form_row}>
                 <div>
                    <label htmlFor="liike2">treeniliike 2 </label>
                    <input type="text" name="liike1"/>
                 </div>
              </div>
            <div className={styles.form_row}>                 
                 <div>
                    <label htmlFor="liike3">treeniliike 3 </label>
                    <input type="text" name="liike1"/>
                 </div> 
                </div>       
            <div className={styles.form_row}>         
                 <div>
                    <label htmlFor="liike4">treeniliike 4 </label>
                    <input type="text" name="liike1"/>
                 </div>
               </div>
            <div className={styles.form_row}>                
                 <div>
                    <label htmlFor="liike5">treeniliike 5 </label>
                    <input type="text" name="liike1"/>
                 </div>
               </div>    
            <div className={styles.form_row}>             
                 <div>
                    <label htmlFor="liike6">treeniliike 6 </label>
                    <input type="text" name="liike1"/>
                 </div>
             </div>
            <div className={styles.form_row}>                 
                 <div>
                    <label htmlFor="liike7">treeniliike 7 </label>
                    <input type="text" name="liike1"/>
                 </div>
            </div>
            <div className={styles.form_row}>
                 <div>
                    <label htmlFor="treeniPause">tauon pituus </label>
                    <input type="text" name="reeniPause"/>
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