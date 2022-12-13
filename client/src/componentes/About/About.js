import React from "react";
import styles from "../About/About.module.css";


const About = () => {

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
            <div className="row">
                <div className="col-1 "></div>
                <div className="col-5" >
                    <img src="/imagenes/img_galletas2.jpg" class={`${styles.banner} d-block w-100`} alt="" />
                </div>
                <div className="col-1 "></div>
                <div className="col-4 d-flex justify-content-center align-items-center"  >
                    <h4>Anver repostería nace de la idea de 3 hermanas, por ello es que al ser una empresa familiar pensamos en aquellos ricos sabores repostería caseros utilizando ingredientes finos y frescos para dar nuestro famoso "toque gourmet", todo esto sin dejar de lado los exquisitos sabores artesanales en todos nuestros productos y con una calidad insuperable. Nuestra empresa se enorgullece de siempre brindar un excelente servicio, tanto en los métodos de aseguramiento de la calidad como en la frescura y selección exclusiva de nuestros ingredientes cuidando cada detalle de nuestro producto final. </h4>
                </div>
                <div className="col-1 "></div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
                    <div className="col-1 "></div>
                    <div className="col-4" >
                        <img src="/imagenes/img_torta.jpg" class={`${styles.banner} d-block w-100`} alt="" />
                    </div>
                    <div className="col-1 "></div>
                    <div className="col-5 d-flex justify-content-center align-items-center"  >
                        <h5><b>MISION </b>
                            <br/>
                            Anver es una empresa dedicada a la creación y venta de arte dulce a través de la fusión de técnicas tradicionales e internacionales, con el propósito que nuestros clientes vivan experiencias únicas y sorprendentes, con alto valor nutricional y de alta calidad a un precio justo. Centramos los esfuerzos en llevar conocimientos y nuevas experiencias culinarias a nuestros clientes internos y externos.
                            <br/>
                            <br/>
                            <b>VISION</b>
                            <br/>
                            Llegar a ser una empresa reconocida por su excelencia en su servicio y en la calidad de sus productos.
                            Ser el referente gastronómico preferido de la región como repostería, manteniendo la innovación, ofreciendo servicios y productos que sobrepasen las expectativas de nuestros clientes. Logrando para el año 2028 apertura de cinco tiendas físicas, por medio de la optimización de los procesos de producción y plan de ventas.
                        </h5>
                    </div>
                    <div className="col-1 "></div>
                </div>
          </div>
          <div class="carousel-item">
            <div className="row">
                    <div className="col-1 "></div>
                    <div className="col-4" >
                        <img src="/imagenes/img_postre.jpg" class={`${styles.banner} d-block w-100`} alt="" />
                    </div>
                    <div className="col-1 "></div>
                    <div className="col-5 d-flex justify-content-center align-items-center"  >
                        <h4><b>OBJETIVOS</b>
                            <br/>
                            <br/>
                            Mejorar continuamente la calidad, productividad y rentabilidad de nuestra organización, con el fin de permanecer y crecer el mercado de la repostería.
                            <br/>
                            <br/>
                            Tener una calidad percibida a precios competitivos, satisfaciendo así con excelencia a nuestros consumidores.
                        </h4>
                    </div>
                    <div className="col-1 "></div>
                </div>
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
      <br />

      <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
                    <a  aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60"   alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /> </a>
                </div>



      </div>

  )

}
export default About;