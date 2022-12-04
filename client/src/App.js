import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllCakes from "./componentes/AllCakes/AllCakes";
import Cake from "./componentes/Cake/Cake";
import NewCake from "./componentes/NewCake/NewCake";
import styles from "./App.module.css";
import UpdateCake from "./componentes/UpdateCake/UpdateCake";



function App() {
  return (
    <div className= {`${styles.cont1} container`}>
      <div className= {`${styles.cont} row d-flex justify-content-evenly align-items-center`}>
        <img src="/imagenes/logo.jpeg" alt="logo" className= {`${styles.img} col-3 img-fluid`}/> 
      </div>
      <div className= {`${styles.cont} row d-flex justify-content-evenly align-items-center`}>
        <h3 className={`${styles.h1} col-3`}>Revive la tradición</h3>
      </div>
      <br/>
      <div className="d-flex justify-content-evenly align-items-center">
        <button className={`${styles.btn} link-light`}>Cupcakes</button>
        <button className={`${styles.btn} link-light`}>Galletas</button>
        <button className={`${styles.btn} link-light`}>Genovesas</button>
        <button className={`${styles.btn} link-light`}>Postres</button>
        <button className={`${styles.btn} link-light`}>Tortas</button>
        <button className={`${styles.btn} link-light`}>Otros productos</button>
      </div>
      <br/>
      <BrowserRouter>

        <Switch>
          <Route path="/cakes" exact render={() => <AllCakes />} />
          <Route path="/cake/new" exact render={() => <NewCake />} />
          <Route path="/cake/:id" exact render={(routeProps) => <Cake {...routeProps} />} />
          <Route path="/cake/update/:id" render={() => <UpdateCake />}/>
        </Switch>

</BrowserRouter>
    </div>
  );
}

export default App;