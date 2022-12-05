import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
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
        }, )
            .then(res => {
                if(res.data.user.rol ==="cliente"){
                    history.push('/cakes');
                } else if (res.data.user.rol ==="administrador"){
                    const cookies = new Cookies()
                    cookies.set('rol', res.data.user.rol, {path: '/'})
                    history.push('/cakes');
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="row">
            <div className="col-6">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="emailLogin">E-mail</label>
                        <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e=>setEmailLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLogin">Password</label>
                        <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} />
                    </div>
                    <div>
                        {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null }
                    </div>
                    <input type="submit" value="Iniciar Sesión" className="btn btn-info" />
                </form>
            </div>
        </div>
    )

}

export default Login;