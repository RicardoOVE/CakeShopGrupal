import React from "react";
import styles from "../App.module.css";



const InicioAbierto = () => {

  


  return (
    <div>
   
      <div className={`${styles.imgInicio}`}>
        <img src="/imagenes/Banner.png" alt="logo" className={`${styles.img1} img-fluid animate__animated animate__zoomIn`} />
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
            <a href="/registro"><button type="button" class={`${styles.btnV} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Ver mas
          </button></a>
          </div>
          <div class={`${styles.mostrarioContainer} col-lg-4`}>
            <img src="/imagenes/GenovesaFresa.png" class={`${styles.mostrario} d-block w-100`} alt="..." />
            <h3 class="fw-normal">Genovesa fresas</h3>
            <p> $ 45.000</p>
            <a href="/registro"><button type="button" class={`${styles.btnV} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Ver mas
          </button></a>
          </div>
          <div class={`${styles.mostrarioContainer} col-lg-4`}>
            <img src="/imagenes/cupcakes.png" class={`${styles.mostrario} d-block w-100`} alt="..." />
            <h3 class="fw-normal">Cupcakes</h3>
            <p>$ 25.000 </p>
            <a href="/registro"><button type="button" class={`${styles.btnV} btn `} data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Ver mas
          </button></a>
          </div>
        </div>


      </div>
      <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
                    <a  aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60"   alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /> </a>
                </div>

      
      </div>

  )


}
export default InicioAbierto;