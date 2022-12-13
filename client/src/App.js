import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import 'animate.css';
import { useHistory } from "react-router-dom";
import axios from "axios"
import AllCakes from "./componentes/AllCakes/AllCakes";
import Cake from "./componentes/Cake/Cake";
import NewCake from "./componentes/NewCake/NewCake";
import styles from "./App.module.css";
import UpdateCake from "./componentes/UpdateCake/UpdateCake";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";
import Cupcakes from "./componentes/AllCakes/Cupcakes";
import Galletas from "./componentes/AllCakes/Galletas";
import Genovesas from "./componentes/AllCakes/Genovesas";
import Postres from "./componentes/AllCakes/Postres";
import Tortas from "./componentes/AllCakes/Tortas";
import OtrosProductos from "./componentes/AllCakes/OtrosProductos";
import Addimage from "./componentes/Addimage";
import Cart from "./componentes/AllCakes/Cart";
import Inicio from "./componentes/Inicio";
import InicioAbierto from "./componentes/InicioAbierto";
import Cookies from 'universal-cookie';
import { useEffect, useState } from "react";
import About from "./componentes/About/About";
import Contactanos from "./componentes/Contactanos";

function App() {
 const history = useHistory();
  const cookies = new Cookies();
  const tipoUsuario = null ?? cookies.get('rol');

  useEffect(() => {
    const tipoUsuario = null ?? cookies.get('rol');

  }, []
  )

  const [direccion, setDireccion] = useState('')


  const cerrarSesion = () => {
    axios.get('http://localhost:8000/api/logout')
      .then(res => {
        cookies.remove("rol")

        history.push('/')
      })
      .catch(err => console.log(err));
  }

    //Shopping Cart
    let [cart, setCart] = useState([])

    let localCart = localStorage.getItem("cart");

    //this is called on component mount
    useEffect(() => {
        //turn it into js
        localCart = JSON.parse(localCart);
        //load persisted cart into state if it exists
        if (localCart) setCart(localCart)

    }, [])

    const addItem = (item) => {

        //create a copy of our cart state, avoid overwritting existing state
        let cartCopy = [...cart];

        //assuming we have an ID field in our item
        let { _id } = item;

        //look for item in cart array
        let existingItem = cartCopy.find(cartItem => cartItem._id == _id);

        //if item already exists
        if (existingItem) {
            existingItem.quantity += 1 //update item
        } else { //if item doesn't exist, simply add it
            item.quantity = 1
            cartCopy.push(item)
        }

        //update app state
        setCart(cartCopy)
        console.log(cartCopy)
        //make cart a string and store in local space
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)

    }

    const removeItem = (itemID) => {

        //create cartCopy
        let cartCopy = [...cart]

        cartCopy = cartCopy.filter(item => item._id != itemID);

        //update state and local
        setCart(cartCopy);

        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
    }


  return (
    <div className={`${styles.cont1}`}>

      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 border-bottom fixed-top">
        <a href="/Inicio" class={`${styles.inicioz} d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none`}>
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul class="d-flex align-items-center nav col-13 col-md-auto mb-2 justify-content-center mb-md-0 fs-5 text">

          <li className={`${styles.li1}`}><a href="/" className={`${styles.btnHover} nav-link link-dark`}>Inicio</a></li>
          <li className={`${styles.li1}`}><a href="#" class="nav-link px-2 link-dark"> <div class="dropdown">
            <button className={`${styles.btnHover1} btn dropdown-toggle fs-5 text"`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </button>
            <ul class={`${styles.dropdown} dropdown-menu`}>
              <li ><a class={`${styles.dropdownMenu} dropdown-item `} href="/cupcakes">Cupcakes</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="/galletas">Galletas</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="/postres">Postres</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="/tortas">Tortas</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="/genovesas">Genovesas</a></li>
              <li><a class={`${styles.dropdownMenu} dropdown-item `} href="/otros_productos">Otros Productos</a></li>
            </ul>
          </div></a></li>


          <li className={`${styles.li1}`}><a href="/" class="">
            <div className={`${styles.imgLogo}`}>
              <img src="/imagenes/logo.jpeg" alt="logo" className={`${styles.img} col-3 img-fluid`} />
            </div>
          </a></li>

          <div className="d-flex flex-row">
            <li className={`${styles.li1}`}><a href="/About" className={`${styles.btnHover} nav-link px-2 link-dark`}>Quienes Somos</a></li>
            <li className={`${styles.li1}`}><a href="/Contactanos" className={`${styles.btnHover} nav-link px-2 link-dark`}>Contactanos</a></li>

          </div>
        </ul>

        <div class="col-md-3 text-end">
          {tipoUsuario == null ? (
            <div>      <a href="/login"><button type="button" class={`${styles.btnL} btn  me-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Inicia Sesion
            </button></a>
              <a href="/registro"><button type="button" class={`${styles.btnR} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Registrate
              </button></a>  </div>


          ) : (<div>
            <div>
             
              <div className="d-flex flex-row-reverse item-content-center">
              <a href="/" type="button" className="px-4 "><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-arrow-right btn btn-danger" viewBox="0 0 16 16" onClick={cerrarSesion}>
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg></a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3 navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                            <div class="offcanvas-header">
                                <div className="container">
                                    <h4 class="offcanvas-title" id="offcanvasNavbarLightLabel">CARRITO DE COMPRAS</h4>
                                    <div className="bg-transparent border-dark mb-3" >
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cart.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className={`${styles.h4}`}>{item.nombre}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>{item.price}</td>
                                                            <td><button class={`${styles.btnV} btn btn-danger `} onClick={() => removeItem(item._id)}>Eliminar</button></td>
                                                        </tr>
                                                    )

                                                })}
                                            </tbody>
                                        </table>
                                        <div className="d-flex justify-content-around ">
                                            <div className="d-flex flex-column">
                                                <label>Regalanos tu direccion completa</label>
                                                <input type="text" name="direccion" value={direccion} onChange={e => setDireccion(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <br />
                                        <a className={`${styles.btnt} btn `} href={'https://wa.me/573122115949?text=Pedido:%20' + JSON.stringify(cart, ['nombre', 'quantity']).replace("[", "").replace("]", "") + 'Dirección:' + direccion}> Terminar compra</a>


                                    </div>
                                    <br />
                                    <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
                                        <a aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60" alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /></a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
              
              
            </div>
            
          </div>)}

        </div>


      </header>

      <br />
      <BrowserRouter>
        <Switch>
          <Route path="/registro" exact render={() => <Registro />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/" exact render={() => <Inicio />} />
          <Route path="/About" exact render={() => <About />} />
          <Route path="/Cakes" exact render={() => <AllCakes />} />
          <Route path="/cupcakes" exact render={() => <Cupcakes />} />
          <Route path="/galletas" exact render={() => <Galletas />} />
          <Route path="/genovesas" exact render={() => <Genovesas />} />
          <Route path="/postres" exact render={() => <Postres />} />
          <Route path="/tortas" exact render={() => <Tortas />} />
          <Route path="/otros_productos" exact render={() => <OtrosProductos />} />
          <Route path="/cake/new" exact render={() => <NewCake />} />
          <Route path="/cake/:id" exact render={(routeProps) => <Cake {...routeProps} />} />
          <Route path="/cake/update/:id" render={() => <UpdateCake />} />
          <Route path="/imagen" render={() => <Addimage />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/InicioAbierto" render={() => <InicioAbierto />} />
          <Route path="/contactanos" render={() => <Contactanos />} />


        </Switch>
      </BrowserRouter>

      <div class="container">

<footer class={`${styles.footer} d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top border-dark`}>
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <svg class="bi" width="30" height="24"></svg>
    </a>
    <span class="mb-3 mb-md-0 text-black">© 2022 Reposteria Anver All rights reserved.</span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-black">
    <li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    </svg></a></li>
    <li class="ms-3"><a class="" href="https://www.instagram.com/reposteria.anvel/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg></a></li>
    <li class="ms-3"><a class="text-muted" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg></a></li>
  </ul>
</footer>
</div>
    </div>
  );
}

export default App;