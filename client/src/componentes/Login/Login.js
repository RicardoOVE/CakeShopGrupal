import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';



const Login = () => {

    //Para Formulario de Inicio de Sesión
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");


    const [errorLogin, setErrorLogin] = useState("");

    const history = useHistory();


    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        },)
            .then(res => {
                if (res.data.user.rol === "cliente") {
                    history.push('/cakes');
                } else if (res.data.user.rol === "administrador") {
                    const cookies = new Cookies()
                    cookies.set('rol', res.data.user.rol, { path: '/' })
                    history.push('/cakes');
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="row">
            <div class="modal modal-signin position-static d-block  py-5" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class=" modal-title fs-4 " id="exampleModalLabel">Inicio Sesion</h1>
                            <a href="/">   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></a>
                        </div>
                        <br />
                        <div class="modal-body p-5 pt-0">
                            <form onSubmit={login}>
                                <div class="form-floating mb-3">
                                    <label htmlFor="emailLogin"></label>
                                    <input type="email" name="emailLogin" id="emailLogin" class="form-control rounded-3" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder="name@example.com" />
                                </div>
                                <div class="form-floating mb-3">
                                    <label htmlFor="passwordLogin">Password</label>
                                    <input type="password" name="passwordLogin" id="passwordLogin" class="form-control rounded-3" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} placeholder="Password" />
                                </div>
                                <div>
                                    {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null}
                                </div>
                                <input type="submit" value="Inicia Sesion" className="w-100 mb-2 btn btn-lg rounded-3 btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Login;