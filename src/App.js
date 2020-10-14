import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from 'components';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import axios from 'axios';

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((resp) => {
      setPizzas(resp.data.pizzas)
    })

    // fetch("http://localhost:3000/db.json")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path={'/'} render={()=><Home items={pizzas}/>} />
        <Route exact path={'/card'} component={Cart} />
      </div>
    </div>
  );
}

export default App;
