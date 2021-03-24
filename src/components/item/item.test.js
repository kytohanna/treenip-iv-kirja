import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

//lue header.test.js 
//toimii samalla tavalla.
// {{}} = javascript olio
test('renders item with text', () => {
  render(<Router>
           <Item data={{
           id: "1234" ,
           kuntosaliDate: "2021-03-03",
           liike1: "alkulämmittely",
           liike2: "",
           liike3: "",
           liike4: "",
           liike5: "",
           liike6: "",
           liike7: "",
           treeniPause: "1min",
           type: "Mave+penkki treeni"

       }} />
       </Router>);
       //onko toi + -merkki ookoo? 
  const type = screen.getByText(/Mave/i);
  expect(type).toBeInTheDocument();

  const liike1 = screen.getByText(/alkulämmittely/i);
  expect(liike1).toBeInTheDocument();
});

//katso läpäisetkö 2/2 testit?
//app.test.disabled.js  <--- ei toimi enää. ei näy komentorivillä.
//item.test.js
//header.test.js