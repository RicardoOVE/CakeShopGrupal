import React, { PureComponent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import styles from "./AllCakes.module.css";
import Cookies from 'universal-cookie';

const url = "http://localhost:8000/api/cakes";

const AllCakes = () => {

    const [lista, setLista] = useState([])

    const history = useHistory();

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout')
            .then(res => {
                cookies.remove('rol', {path: '/'}); 
                history.push('/')
            } )
            .catch(err => console.log(err));
    }

    const cookies = new Cookies();
    const tipoUsuario = null ?? cookies.get('rol');
    const [error, setError] = useState();

    const [image, setImage] = useState();


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

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let imageUrl = "";
            if (image) {
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "pruebaImagen");
                const dataRes = await axios.post(
                    "yourUrl",
                    formData
            );
            imageUrl = dataRes.data.url;
        }
    
        const submitPost = {
            image: imageUrl,
        };

        await axios.post("http://localhost:3001/store-image", submitPost);
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
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
        <div>
            <div className="d-flex justify-content-evenly align-items-center">
                <Link to="/cupcakes" className={`${styles.btn} link-light`}>Cupcakes</Link>
                <Link to="/galletas" className={`${styles.btn} link-light`}>Galletas</Link>
                <Link to="/genovesas" className={`${styles.btn} link-light`}>Genovesas</Link>
                <Link to="/postres" className={`${styles.btn} link-light`}>Postres</Link>
                <Link to="/tortas" className={`${styles.btn} link-light`}>Tortas</Link>
                <Link to="/otros_productos" className={`${styles.btn} link-light`}>Otros Productos</Link>            
            </div>
            <div className="container ">
                <div>
                    <div className="d-flex flex-row-reverse">
                        <button className={`${styles.btn2} link-light`} onClick={cerrarSesion}>Cerrar Sesi??n</button>
                        {tipoUsuario === "administrador" ? (
                            <Link to="/cake/new" className= {`${styles.btn2} link-light`} >Agregar Producto</Link>
                        ) : (<div></div>) }
                        <Link className={`${styles.btn2} link-light`} to="/cart">Carrito de compras</Link>
                    </div>
                    
                </div>
                <br/>
                
            </div>
            <br/>
            
            <div className="container">
                <div className="container col-8 bg-transparent border-dark mb-3 text-center" >
                {lista.map((item, index) => {
                    return(
                    <div className="container p-3"  key={index}>
                        <div className="row" >
                            <h2 className={`${styles.h2}`}>{item.nombre}</h2>
                            <div className="col-4" style={{alignSelf:"center"}}>
                                <img src={item.imagenURL} alt="cake" className='img-fluid img-thumbnail border border-dark'/>
                            </div>
                            <div className={`${styles.cont1} col-5 container`} style={{alignSelf:"center"}}>
                                <div className="row text-align-center"  >
                                    <div className="col-6">
                                        <p><b># de Porciones:</b></p>
                                    </div>
                                    <div className="col-6">
                                        <p> {item.porciones}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p><b>Precio:</b></p>
                                        </div>
                                        <div className="col-6">
                                            <p> {item.price}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p><b>Refrigerada:</b></p>
                                        </div>
                                        <div className="col-6">
                                            <p> {item.refrigerated === true ? <p>Si</p> : <p>No</p>}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.cont2} col-3 container`} style={{alignSelf:"center"}}>
                                    <div className= {`${styles.botones} d-grid gap-2 col-6 mx-auto`} >
                                        <Link to={`/cake/${item._id}`} 
                                        className={`${styles.btn} link-light`} > Ver</Link>
                                        <button onClick={(e) => addItem(item)} className={`${styles.btn}`}>Agregar al carrito</button >
                                        {tipoUsuario === "administrador" ? (
                                        <Link to={`/cake/update/${item._id}`} className={`${styles.btn3} link-light`} > Editar Producto</Link>
                                        ) : (<div></div>) }
                                        {tipoUsuario === "administrador" ? (
                                        <button className="btn btn-dark" onClick={() => borrar(item._id)} >Eliminar</button>
                                        ) : (<div></div>) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}  
                </div>
                <br/>
                <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
                    <a  aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60"   alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /> </a>
                </div>
            </div>
        </div>
    )

}
export default AllCakes;