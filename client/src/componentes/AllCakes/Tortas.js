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

    return (
        <div className={`${styles.btnproducto}`}>
            <div className="container">
                <div>
                    <div className="d-flex flex-row-reverse">
                        <button className={`${styles.btn2} link-light`} onClick={cerrarSesion}>Cerrar Sesión</button>
                        {tipoUsuario === "administrador" ? (
                            <Link to="/cake/new" className={`${styles.btn2} link-light`} >Agregar Producto</Link>
                        ) : (<div></div>)}

                    </div>

                </div>
                <br />

                <div className="container">
                    {lista.map((item) => {
                        if (item.categoria === "tortas") {


                            return (
                                <div class="album py-5 bg-light">
                                    <div class="container">

                                        <div class="d-flex row cols-1 row-cols-sm-1 row-cols-md-3 g-3">
                                            <div class="col">
                                                <div class="card shadow-sm">
                                                    <img src={item.imagenURL} alt="cake" className='img-fluid img-thumbnail border border-dark' />
                                                    <div class="card-body">
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
                                                                {tipoUsuario === "administrador" ? (
                                                                    <Link to={`/cake/update/${item._id}`} type="button" class="btn btn-sm btn-outline-secondary">Editar</Link>
                                                                ) : (<div></div>)}
                                                                {tipoUsuario === "administrador" ? (<Link type="button" onClick={() => borrar(item._id)} class="btn btn-sm btn-outline-secondary">Eliminar</Link>
                                                                ) : (<div></div>)}
                                                            </div>
                                                            <small class="text-muted">9 mins</small>
                                                        </div>
                                                    </div>
                                                </div>
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