import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import styles from "./NewCake.module.css";

const NewCake = () => {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagenURL, setImagenURL] = useState("");
    const [porciones, setPorciones] = useState("")
    const [price, setPrice] = useState("");
    const [porciones2, setPorciones2] = useState("")
    const [price2, setPrice2] = useState("");
    const [porciones3, setPorciones3] = useState("")
    const [price3, setPrice3] = useState("");
    const [description, setDescription] = useState("");
    const [refrigerated, setRefrigerated] = useState(true);
    
    const [errors, setErrors] = useState({});

    const history = useHistory();

     const [image, setImage] = useState({ preview: '', data: '' })
    const [url, setUrl] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        
        let formData = new FormData()
        formData.append('file', image.data)
        axios.post("http://localhost:8000/api/imagen", formData)
            .then(result => {
                console.log(result);
            })
            .catch(err => (false));
    }

    const handleFileChange = (e) => {
        const vid = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(vid);
        setUrl(vid.data.name);
    }


    const guardarCake = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/cakes", {
            nombre,
            categoria,
            imagenURL,
            porciones, 
            price,
            porciones2, 
            price2,
            porciones3, 
            price3,
            description,
            refrigerated, 
        })
            .then(result => result.data)
            .then(response => {
                console.log(response);
                setErrors({});
                setNombre("");
                setCategoria("")
                setImagenURL("");
                setPorciones();
                setPrice("");
                setPorciones2();
                setPrice2("");
                setPorciones3();
                setPrice3("");
                setDescription("");
                setRefrigerated("");

                history.push(`/${categoria}`);
            })
            .catch(err => {
                console.log(err.response.data);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
            
    }

    return(
        <div className={`container`}>
            <div>
                <div className="d-flex flex-row-reverse">
                    <Link to="/cakes" className={`${styles.btn2} p-2`}> Volver al Inicio </Link>

                </div>
                <h3 className={`${styles.h3} text-center my-2`}>Nuevo Producto</h3>
                
            </div>
            <div className='container bg-transparent p-3'>
                
                <form onSubmit={guardarCake}>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-10'>
                            <div className='form-group row'>
                                <label htmlFor='nombre' className="col-sm-3 col-form-label"><b>Nombre del producto:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="nombre" name="nombre" placeholder="Indica el nombre del producto" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control"/>
                                    {errors.nombre ? <span className='text-danger'>{errors.nombre.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <p className="col-sm-3 col-form-label"><b>Categoria:</b></p>
                                <div class="col-sm-7">
                                    <select label="Categoria:" className="form-select form-select-lg text-center" value={categoria} onChange={e => setCategoria(e.target.value)}   >
                                        <option value="Categoria">Elige una categoria</option>
                                        <option value="Cupcakes">Cupcakes</option>
                                        <option value="Galletas">Galletas</option>   
                                        <option value="Postres">Postre</option>
                                        <option value="tortas">Torta</option>                                       
                                    </select>
                                    {errors.categoria ? <span className='text-danger'>{errors.categoria.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='imagenURL' className="col-sm-3 col-form-label"><b>URL de la Imagen:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="imagenURL" name="imagenURL" placeholder="Ingrese la URL de la imagen" value={imagenURL} onChange={e => setImagenURL(e.target.value)} className="form-control"/>
                                    {errors.imagenURL ? <span className='text-danger'>{errors.imagenURL.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones' className="col-sm-3 col-form-label"><b># de porciones:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones" name="porciones" placeholder="Indica el # de porciones del producto principal" value={porciones} onChange={e => setPorciones(e.target.value)} className="form-control"/>
                                    {errors.porciones ? <span className='text-danger'>{errors.porciones.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price' className="col-sm-3 col-form-label"><b>Precio:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price" name="price" placeholder="Indica el valor del producto principal" value={price} onChange={e => setPrice(e.target.value)} className="form-control"/>
                                    {errors.price ? <span className='text-danger'>{errors.price.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones2' className="col-sm-3 col-form-label"><b># de porciones -opc 2-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones2" name="porciones2" placeholder="Indica el # de porciones de una segunda opción" value={porciones2} onChange={e => setPorciones2(e.target.value)} className="form-control"/>
                                    {errors.porciones2 ? <span className='text-danger'>{errors.porciones2.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price' className="col-sm-3 col-form-label"><b>Precio -opc 2-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price2" name="price2" placeholder="Indica el valor de una segunda opción de tamaño" value={price2} onChange={e => setPrice2(e.target.value)} className="form-control"/>
                                    {errors.price2 ? <span className='text-danger'>{errors.price2.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones3' className="col-sm-3 col-form-label"><b># de porciones -opc 3-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones3" name="porciones3" placeholder="Indica el # de porciones de una tercera opción" value={porciones3} onChange={e => setPorciones3(e.target.value)} className="form-control"/>
                                    {errors.porciones3 ? <span className='text-danger'>{errors.porciones3.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price3' className="col-sm-3 col-form-label"><b>Precio -opc 3-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price3" name="price3" placeholder="Indica el valor de una tercera opción de tamaño" value={price3} onChange={e => setPrice3(e.target.value)} className="form-control"/>
                                    {errors.price3 ? <span className='text-danger'>{errors.price3.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='description' className="col-sm-3 col-form-label"><b>Descripción:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="description" name="description" placeholder="Ingresa una descripción del producto" value={description} onChange={e => setDescription(e.target.value)} className="form-control"/>
                                    {errors.description ? <span className='text-danger'>{errors.description.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                        
                    
                        
                            <div className='form-group'>
                                <input type="checkbox" className='form-check-input' id="refrigerated" name="refrigerated" checked={refrigerated} onChange={e => setRefrigerated(e.target.checked)} />
                                <label className='form-check-label px-3 ' htmlFor='refrigerated'>
                                <b>Producto Refrigerado</b>
                                </label>
                            </div>
           
                            <br/>
                            <input type="submit" className={`${styles.btn3} p-2`} value="Agregar Producto"/>
                        
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )



}
    
    
export default NewCake;