import React, { useState } from "react";
import styles from "../App.module.css";
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
          const cookies = new Cookies()
          cookies.set('rol', res.data.user.rol, { path: '/' })
          const tipoUsuario = null ?? cookies.get('rol');
          history.push('/InicioAbierto');
      })
      .catch(err => console.log(err));
  }


  return (
    <div className="row">
      <div class="modal modal-signin position-fixed d-block  py-5" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow bg-light bg-gradient">
            <div class="modal-header p-5 pt-4 pb-0 border-bottom-0">
              <h1 class=" modal-title fs-3 " id="exampleModalLabel">Inicia Sesion</h1>
              <a href="/">   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></a>
            </div>
            <hr className="my-4" />
            <div class="modal-body p-5 pt-0">
              <form onSubmit={login}>
                <div class="form-floating mb-3">
                  <input type="email" name="emailLogin" id="emailLogin" class="form-control" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder="name@example.com" />
                  <label htmlFor="emailLogin">Correo</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" name="passwordLogin" id="passwordLogin" class="form-control rounded-3" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} placeholder="Password" />
                  <label htmlFor="passwordLogin">Contraseña</label>

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
      <div className="container">
        <div className={`${styles.imgInicio}`}>
          <img src="/imagenes/Banner.png" alt="logo" className={`${styles.img1} img-fluid animate__animated animate__zoomIn`} />
        </div>
      </div>
      <div id="carouselExampleIndicators" class={`${styles.carruselColor} carousel slide`} data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class={`${styles.carusel} carousel-inner`}>
          <div class={`${styles.caruselItem} carousel-item active`}>
            <img src="/imagenes/torta.jpg" class={`${styles.banner} d-block w-100`} alt="" />
          </div>
          <div class="carousel-item">
            <img src="/imagenes/pie.png" class={`${styles.banner} d-block w-100`} alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/imagenes/mufins.png" class={`${styles.banner} d-block w-100`} alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <h2 className={`${styles.productosMira}`}>Mira nuestros productos</h2>
      <br />
      <div class={`${styles.productos} container marketing`}>


        <div class="row">
          <div class={`${styles.mostrarioContainer} col-lg-4`}>
            <img src="/imagenes/GenovesaMoka.png" class={`${styles.mostrario} d-block w-100`} alt="..." />
            <h3 class="fw-normal">Genovesa moka</h3>
            <p className="">$ 40.000</p>
            <a href="/registro"><button type="button" class={`${styles.btnL} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Ver mas
            </button></a>
          </div>
          <div class={`${styles.mostrarioContainer} col-lg-4`}>
            <img src="/imagenes/GenovesaFresa.png" class={`${styles.mostrario} d-block w-100`} alt="..." />
            <h3 class="fw-normal">Genovesa fresas</h3>
            <p> $ 45.000</p>
            <a href="/registro"><button type="button" class={`${styles.btnL} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Ver mas
            </button></a>
          </div>
          <div class={`${styles.mostrarioContainer} col-lg-4`}>
            <img src="/imagenes/cupcakes.png" class={`${styles.mostrario} d-block w-100`} alt="..." />
            <h3 class="fw-normal">Cupcakes</h3>
            <p>$ 25.000 </p>
            <a href="/registro"><button type="button" class={`${styles.btnL} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Ver mas
            </button></a>
          </div>
        </div>


      </div>
      <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60" alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /> </a>
      </div>

    </div>
  )

}

export default Login;