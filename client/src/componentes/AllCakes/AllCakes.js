import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import styles from "./AllCakes.module.css";

const url = "http://localhost:8000/api/cakes";

const AllCakes = () => {

    const [lista, setLista] = useState([])

    const history = useHistory();


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

    return (
        <div className="container ">
            <div>
                <div className="d-flex flex-row-reverse">
                    <Link to="/cake/new" className= {`${styles.btn2} link-light`} >Agregar Producto</Link>
                </div>
                
            </div>
            <br/>
            
            <div className="container">
                {lista.map((item) => {
                    return (
                        <div className="container col-8 bg-transparent border-dark mb-3 text-center" >
                            <div className="container p-3">
                                <div className="row">
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
                                            <Link to={`/cake/update/${item._id}`} 
                                            className={`${styles.btn3} link-light`} > Editar Producto</Link>
                                            <button className="btn btn-dark" onClick={() => borrar(item._id)} >Eliminar</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )})}   
            </div>
            <br/>

        </div>
    );

}
export default AllCakes;