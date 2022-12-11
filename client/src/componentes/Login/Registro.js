import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Registro = () => {

    //Para Formulario de Registro
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorRegistro, setErrorsRegistro] = useState({});

    const history = useHistory();

    const registro = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            email,
            address,
            password,
            confirmPassword
        },)
            .then(res => history.push('/'))
            .catch(err => setErrorsRegistro(err.response.data.errors));
    }

    return (
        <div className="row">
            <div class="modal  modal-signin position-static d-block  py-5" id="exampleModal1" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class=" modal-title fs-5 " id="exampleModalLabel">Registro</h1>
                         <a href="/">   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></a>
                        </div>
                        <br />
                        <div class="modal-body p-5 pt-0">

                            <form onSubmit={registro}>
                                <div class="form-floating mb-3">
                                    <label htmlFor="firstName">Nombre</label>
                                    <input type="text"name="firstName" id="firstName"  className="form-control rounded-3" value={firstName}onChange={e => setFirstName(e.target.value)} placeholder="name@example.com"/>
                                    {errorRegistro.firstName ? <span className="text-danger">{errorRegistro.firstName.message}</span> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label htmlFor="lastName">Apellido</label>
                                    <input type="text" name="lastName" id="lastName"  className="form-control rounded-3" value={lastName} onChange={e => setLastName(e.target.value)} />
                                    {errorRegistro.lastName ? <span className="text-danger">{errorRegistro.lastName.message}</span> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email"  className="form-control rounded-3" value={email} onChange={e => setEmail(e.target.value)} />
                                    {errorRegistro.email ? <span className="text-danger">{errorRegistro.email.message}</span> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label htmlFor="address">Dirección</label>
                                    <input type="text" name="address" id="address"  className="form-control rounded-3" value={address} onChange={e => setAddress(e.target.value)} />
                                    {errorRegistro.address ? <span className="text-danger">{errorRegistro.address.message}</span> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password"  className="form-control rounded-3" value={password} onChange={e => setPassword(e.target.value)} />
                                    {errorRegistro.password ? <span className="text-danger">{errorRegistro.password.message}</span> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <label htmlFor="confirmPassword">Confirmación</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword"  className="form-control rounded-3" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                    {errorRegistro.confirmPassword ? <span className="text-danger">{errorRegistro.confirmPassword.message}</span> : null}
                                </div>
                                <input type="submit" value="Registarme" className="w-100 mb-2 btn btn-lg rounded-3 btn-success" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            )

}

export default Registro;