import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from 'react-router-dom';
import styles from "./UpdateCake.module.css";

const UpdateCake = () => {

    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("")
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/cake/"+id)
            .then(res => {
                setNombre(res.data.nombre);
                setCategoria(res.data.categoria)
                setImagenURL(res.data.imagenURL);
                setPorciones(res.data.porciones);
                setPrice(res.data.price);
                setPorciones2(res.data.porciones2);
                setPrice2(res.data.price2);
                setPorciones3(res.data.porciones3);
                setPrice3(res.data.price3);
                setDescription(res.data.description);
                setRefrigerated(res.data.refrigerated);
            })
            .catch(err => history.push('/error'));
    }, [id, history])

    const updateCake = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/cake/"+id, {
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
            .then(res => history.push('/cakes'))
            .catch(err => setErrors(err.response.data.errors));        
    }

    return(
        <div className="container ">
            <div>
                <div className="d-flex flex-row-reverse">
                    <Link to="/cakes" className={`${styles.btn2} p-2`}> Volver al Inicio </Link>

                </div>
                <h3 className={`${styles.h3} text-center my-2`}>Editar Producto</h3>
                
            </div>
            <div className='container bg-transparent p-3'>
                
                <form onSubmit={updateCake}>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-10'>
                            <div className='form-group row'>
                                <label htmlFor='nombre' className="col-sm-3 col-form-label"><b>Nombre del producto:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control"/>
                                    {errors.nombre ? <span className='text-danger'>{errors.nombre.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <p className="col-sm-3 col-form-label"><b>Categoria:</b></p>
                                <div class="col-sm-7">
                                    <select label="Categoria:" className="form-select form-select-lg text-center" value={categoria} onChange={e => setCategoria(e.target.value)}   >
                                        <option value="categoria">{categoria}</option>
                                        <option value="Cupcakes">Cupcakes</option>
                                        <option value="Galletas">Galletas</option>
                                        <option value="Genovesa">Genovesa</option>
                                        <option value="Postre">Postre</option>
                                        <option value="Torta">Torta</option>
                                        <option value="Otros productos">Otros Productos</option>
                                    </select>
                                    {errors.categoria ? <span className='text-danger'>{errors.categoria.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='imagenURL' className="col-sm-3 col-form-label"><b>URL de la Imagen:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="imagenURL" name="imagenURL" value={imagenURL} onChange={e => setImagenURL(e.target.value)} className="form-control"/>
                                    {errors.imagenURL ? <span className='text-danger'>{errors.imagenURL.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones' className="col-sm-3 col-form-label"><b># de porciones:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones" name="porciones" value={porciones} onChange={e => setPorciones(e.target.value)} className="form-control"/>
                                    {errors.porciones ? <span className='text-danger'>{errors.porciones.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price' className="col-sm-3 col-form-label"><b>Precio:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)} className="form-control"/>
                                    {errors.price ? <span className='text-danger'>{errors.price.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones2' className="col-sm-3 col-form-label"><b># de porciones -opc 2-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones2" name="porciones2"  value={porciones2} onChange={e => setPorciones2(e.target.value)} className="form-control"/>
                                    {errors.porciones2 ? <span className='text-danger'>{errors.porciones2.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price' className="col-sm-3 col-form-label"><b>Precio -opc 2-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price2" name="price2"  value={price2} onChange={e => setPrice2(e.target.value)} className="form-control"/>
                                    {errors.price2 ? <span className='text-danger'>{errors.price2.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='porciones3' className="col-sm-3 col-form-label"><b># de porciones -opc 3-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="porciones3" name="porciones3" value={porciones3} onChange={e => setPorciones3(e.target.value)} className="form-control"/>
                                    {errors.porciones3 ? <span className='text-danger'>{errors.porciones3.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='price3' className="col-sm-3 col-form-label"><b>Precio -opc 3-:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="price3" name="price3"  value={price3} onChange={e => setPrice3(e.target.value)} className="form-control"/>
                                    {errors.price3 ? <span className='text-danger'>{errors.price3.message}</span> : null}
                                </div>
                            </div>
                            <br/>
                            <div className='form-group row'>
                                <label htmlFor='description' className="col-sm-3 col-form-label"><b>Descripción:</b></label>
                                <div class="col-sm-7">
                                    <input type="text" id="description" name="description"  value={description} onChange={e => setDescription(e.target.value)} className="form-control"/>
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
                            <input type="submit" className={`${styles.btn3} p-2`} value="Guardar"/>
                        
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )



}
    
    
export default UpdateCake;