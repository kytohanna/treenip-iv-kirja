const data = [
    {
      id:             "1",
      type:           "Treeni, mave+penkki",
      treeniDate:     "2020-11-01",
      liike1:         "alkulämmittely",
      liike2:         "hausikääntö 3,4,6kg käsipainot",
      liike3:         "penkkipunnerrus 3x6, 5,8,10kg käsipainot",
      liike4:         "istumaannousu 3x10",
      liike5:         "maastaveto 6,10,15kg kahvakuulat 2kpl",
      liike6:         "pystypunnerrus 3,4,5kg käsipainot",
      liike7:         "loppuvenyttely",
      treeniPause:     "1min tauko sarjojen välissä",
    },
    {
        id:             "2",
        type:           "Treeni, kyykky+kulmasoutu",
        treeniDate:     "2020-11-05",
        liike1:         "juoksumatto 10min",
        liike2:         "kyykky 3x8 0,3,6kg kahvakuula",
        liike3:         "kulmasoutu 3x8 4,6,8kg käsipainot",
        liike4:         "jalkaprässi 3x8 50,60,80kg",
        liike5:         "ojentajat 3,5,6kg käsipainot",
        liike6:         "loppuvenyttely",
        liike7:         "",
        treeniPause:     "1min tauko sarjojen välissä",
      },
      {
        id:             "3",
        type:           "Treeni, mave+penkki",
        treeniDate:     "2020-11-08",
        liike1:         "kuntopyörä 7min",
        liike2:         "penkkipunnerrus 2x5 4,7kg käsipainot",
        liike3:         "penkki tangolla (20kg) 3x5",
        liike4:         "vatsa rutistus pallon päällä 3x10",
        liike5:         "maastaveto 6kg kahvakuulat 2x5, tangolla 2x5",
        liike6:         "arnold press 3,4,5kg käsipainot",
        liike7:         "loppuvenyttely",
        treeniPause:     "1-2min tauko sarjojen välissä",
      },
 ];
 
 export default data;

 //mitä tietoja yksittäiset kirjanpito merkinnät sisältää
 /*ole tarkkana. tässä tulee isoja eroja verrattuna 
 opettajan tekemään ohjelmaan "kulupito"
 item.js sisältää tiedot yksittäisistä merkinnöistä
 jokainen {} pitää sisällään yhden taulukon alkion
 eli yhden kirjanpito merkinnän
 kulupidossa uusin on ylimpänä,vanhin alimpana,
 mulla on nyt omapidossa se toisin päin*/
