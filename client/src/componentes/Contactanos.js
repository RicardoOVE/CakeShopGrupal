import React from "react";
import { useState } from "react";
import styles from "../App.module.css";


const Contactanos = () => {

    const [nombre, setNombre] = useState('Nombre Completo')
    const [email, setEmail] = useState('Email')
    const [celular, setCelular] = useState('Celular')
    const [ciudad, setCiudad] = useState('Ciudad')
    const [mensaje, setMensaje] = useState('Mensaje')

    return (
        <div className="contactenos my-5 pt-5">
            <div className="my-5"></div>
            <div className="container">
                <div className="pb-5"></div>
                <div className="row">
                    <div className="col text-center">
                        <h5>¿Tienes comentarios para nosotros?</h5>
                        <h1 className="py-4">Contáctanos</h1>
                        <div className="row">
                            <div className="col">
                                <h5 className="py-3">NUESTRA INFO</h5>
                                <div className="row">
                                    <div className="col-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill mt-5" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill mt-4" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" /></svg>
                                    </div>
                                    <div className="col-10">
                                        <p>Diagonal 50A # 37-01 Bello, Antioquia</p>
                                        <p>+57 312 2115949</p>
                                        <p>contacto@anver.com.co</p>
                                    </div>
                                </div>


                            </div>
                            <div className="col">
                                <h5 className="py-3">REDES SOCIALES</h5>
                                <a style={{textDecoration:'none', color:'black'}}href="https://www.instagram.com/reposteria.anvel/"><div className=" "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg><p> reposteria.anvel</p>
                                    </div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="pt-5">Envíanos un mensaje</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" class="form-control my-2" value={nombre} onChange={e=>setNombre(e.target.value)}></input>
                                <input type="text" class="form-control my-2" value={email} onChange={e=>setEmail(e.target.value)}></input>
                                <input type="text" class="form-control my-2" value={celular} onChange={e=>setCelular(e.target.value)}></input>
                                <input type="text" class="form-control my-2" value={ciudad} onChange={e=>setCiudad(e.target.value)}></input>
                                <input type="text" class="form-control my-2" value={mensaje} onChange={e=>setMensaje(e.target.value)}></input>
                                
                                <a className="w-100 mb-2 btn btn-lg rounded-3 btn-success" href={'https://wa.me/573122115949?text=Nombre:%20' + nombre +'%20Email:' + email + '%20Celular:' + celular + '%20Ciudad' + ciudad + '%20Mensaje:' + mensaje }> Enviar Mensaje</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Contactanos;