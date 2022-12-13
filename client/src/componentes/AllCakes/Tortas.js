import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import styles from "./AllCakes.module.css";
import Cookies from 'universal-cookie';

const url = "http://localhost:8000/api/cakes";

const Tortas = () => {

    const [lista, setLista] = useState([])
    const [direccion, setDireccion] = useState('')

    const history = useHistory();

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout')
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    const cookies = new Cookies();
    const tipoUsuario = null ?? cookies.get('rol');

    const get_all = () => {
        axios.get(url)
            .then(result => result.data)
            .then(response => {
                console.log("CAKES", response);
                setLista(response);
            })
    }

    useEffect(() => {
        get_all();
    }, [])

    const borrar = (id) => {
        console.log("BORRANDO: ", id);

        axios.delete(url + "/" + id)
            .then(result => result.data)
            .then(response => {
                console.log(response);
                get_all();
            })
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
        let {_id} = item;
        
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
        <div className={`${styles.btnproducto}`}>
            <div className="container">
            <div>
                    <div className="d-flex flex-row-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3 navbar-toggler " type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark"viewBox="0 0 16 16">
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
                                return(
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
                            <input type="text" name="direccion" value={direccion} onChange={e=>setDireccion(e.target.value)}></input>
                        </div>
                    </div>
                    <br/>
                    <a className={`${styles.btnt} btn `} href={'https://wa.me/573122115949?text=Pedido:%20'+ JSON.stringify(cart, ['nombre', 'quantity']).replace("[", "").replace("]", "") + 'Dirección:' + direccion}> Terminar compra</a>


                </div>
                <br/>
                <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
                    <a aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60" alt="Chat on WhatsApp" src="../imagenes/whatsapp.png"/></a>
                </div>
            
            </div>
        </div>
      </div>
                        
                        {tipoUsuario === "administrador" ? (
                            <Link to="/cake/new" className={`${styles.btn2} btn btn-primary mx-4`} >Agregar Producto</Link>
                        ) : (<div></div>)}
                        
                    </div>

                </div>
                <br />
                <div className="d-flex row justify-content-between pt-1 mt-1 text-center">
                    <h1><b>T O R T A S</b></h1>
                </div>

                <div className="d-flex row justify-content-between pt-1 mt-1 text-center">
                    {lista.map((item) => {
                        if (item.categoria === "tortas") {


                            return (
                                <div class="album bg-light card border-dark my-5" style={{ width: '25rem', height: '31rem' }}>
                                    <img src={item.imagenURL} alt="cake" className='card-img-top pt-2' style={{ height: '15rem', objectFit: 'cover' }} />
                                    <div class={`${styles.bodyProductos} card-body`}>
                                        <ul className="list-unstyled">
                                            <h2 >{item.nombre}</h2>
                                            <li>
                                                <div className="col-6">
                                                    <p><b>Porciones: </b>{item.porciones}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-6">
                                                    <p><b>Precio: </b>{item.price}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="col-6">
                                                    <p><b>Refrigerada: </b>{item.refrigerated === true ? <p>Si</p> : <p>No</p>}</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <Link to={`/cake/${item._id}`} type="button" class="btn btn-sm btn-outline-secondary">Ver</Link>
                                                <button onClick={(e) => addItem(item)} className="btn btn-sm btn-outline-secondary">Agregar al carrito</button >
                                                {tipoUsuario === "administrador" ? (
                                                    <Link to={`/cake/update/${item._id}`} type="button" class="btn btn-sm btn-outline-secondary">Editar</Link>
                                                ) : (<div></div>)}
                                                {tipoUsuario === "administrador" ? (<Link type="button" onClick={() => borrar(item._id)} class="btn btn-sm btn-outline-secondary">Eliminar</Link>
                                                ) : (<div></div>)}
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            )
                        }
                    }
                    )}
                </div>


                <br />

            </div>
           
        </div>
    );

}
export default Tortas;