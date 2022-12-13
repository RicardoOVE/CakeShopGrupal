import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import styles from "./Cake.module.css";
import Cookies from 'universal-cookie';

const Cake = () => {
    //id de la ruta en App
    const {id} = useParams();
    const [cake, setCake] = useState({});

    const cookies = new Cookies();
    const tipoUsuario = null ?? cookies.get('rol');

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

    //Inicializar el servidor para optener el producto que necesito
    //Se inicializa a travez de axios

    useEffect(() => {
        axios.get("http://localhost:8000/api/cake/"+id)
            .then(res => {
                setCake(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);


    return (
        <div className = "container bg-transparent">
            <div>
                <div className="d-flex flex-row-reverse">
                    <Link to="/" className={`${styles.btn2} p-2`}> Volver al Inicio </Link>

                </div>
                <h1 className={`${styles.h1} text-center my-2`} >{cake.nombre}</h1>
            </div>
            <div className="container bg-transparent p-3 col-10">
                <div className="row text-center">
                    <div className="col-5 ">
                        <div>
                            <img src={cake.imagenURL} alt="cake" className='img-fluid img-thumbnail border border-dark' width="250"/>
                        </div>
                        <br/>
                        <div>
                            <h4>{cake.description}</h4>
                        </div>
                        
                    </div>
                    
                    <div className="col-6 container bg-transparent p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td><b><h4># de Porciones</h4></b></td>
                                    <td><b><h4>Precio</h4></b></td>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>{cake.porciones}</td>
                                    <td>{cake.price}</td>
                                </tr>
                                <tr> 
                                    <td>{cake.porciones2}</td>
                                    <td>{cake.price2}</td>
                                </tr>
                                <tr> 
                                    <td>{cake.porciones3}</td>
                                    <td>{cake.price3}</td>
                                </tr>
                                <tr>
                                    <td><b>Producto Refrigerado:</b></td>
                                    <td>{cake.refrigerated === true ? <p>Si</p> : <p>No</p>}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={(e) => addItem(cake)} className={`${styles.btn2}`}>Agregar al carrito</button >
                        {tipoUsuario === "administrador" ? (
                        <Link to={`/cake/update/${cake._id}`} className={`${styles.btn3} link-light`} > Editar Producto</Link>
                        ) : (<div></div>) }
                        
                    </div>   
                </div>  
            </div>
        </div>
    )
}
    
export default Cake;