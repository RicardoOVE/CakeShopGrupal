import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AllCakes from "./componentes/AllCakes/AllCakes";
import Cake from "./componentes/Cake/Cake";
import NewCake from "./componentes/NewCake/NewCake";
import styles from "./App.module.css";
import UpdateCake from "./componentes/UpdateCake/UpdateCake";
import Registro from "./componentes/Login/Registro";
import Login from "./componentes/Login/Login";
import Cupcakes from "./componentes/AllCakes/Cupcakes";
import Galletas from "./componentes/AllCakes/Galletas";
import Genovesas from "./componentes/AllCakes/Genovesas";
import Postres from "./componentes/AllCakes/Postres";
import Tortas from "./componentes/AllCakes/Tortas";
import OtrosProductos from "./componentes/AllCakes/OtrosProductos";
import Addimage from "./componentes/Addimage";
import Inicio from "./componentes/Inicio";

function App() {


  return (
    <div className={`${styles.cont1}`}>

    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 border-bottom fixed-top">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
      </a>

      <ul class="d-flex align-items-center nav col-13 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className={`${styles.li1}`}><a href="#" className={`${styles.btnHover} nav-link px-2 link-dark`}>Inicio</a></li>
        <li className={`${styles.li1}`}><a href="#" class="nav-link px-2 link-dark"> <div class="dropdown">
            <button className={`${styles.btnHover1} btn dropdown-toggle`}type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos 
            </button>
            <ul class={`${styles.dropdown} dropdown-menu`}>
              <li ><a class={`${styles.dropdownMenu} dropdown-item `}href="#">Cupcakes</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="#">Galletas</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="#">Postres</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="#">Tortas</a></li>
            </ul>
          </div></a></li>
        <li className={`${styles.li1}`}><a href="#" class="">
          <div className={`${styles.imgLogo}`}>
                <img src="/imagenes/logo.jpeg" alt="logo" className= {`${styles.img} col-3 img-fluid`}/> 
          </div>
        </a></li>
        <li className={`${styles.li1}`}><a href="#" className={`${styles.btnHover} nav-link px-2 link-dark`}>Quienes Somos</a></li>
        <li className={`${styles.li1}`}><a href="#" className={`${styles.btnHover} nav-link px-2 link-dark`}>Contactanos</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <a  href="/login"><button type="button" class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Login
        </button></a>
        
        <a href="/registro"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
          Register
        </button></a>
        
        </div>
       

      
    </header>
   
 

      <br/>
      <BrowserRouter>


        <Switch>
          <Route path="/registro" exact render={() => <Registro />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/" exact render={() => <Inicio />} />
          <Route path="/Cakes" exact render={() => <AllCakes />} />
          <Route path="/cupcakes" exact render={() => <Cupcakes />} />
          <Route path="/galletas" exact render={() => <Galletas />} />
          <Route path="/genovesas" exact render={() => <Genovesas />} />
          <Route path="/postres" exact render={() => <Postres />} />
          <Route path="/tortas" exact render={() => <Tortas />} />
          <Route path="/otros_productos" exact render={() => <OtrosProductos />} />
          <Route path="/cake/new" exact render={() => <NewCake />} />
          <Route path="/cake/:id" exact render={(routeProps) => <Cake {...routeProps} />} />
          <Route path="/cake/update/:id" render={() => <UpdateCake />}/>
          <Route path="/imagen" render={() => <Addimage/>}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;