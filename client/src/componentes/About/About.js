import React from "react";
import styles from "../About/About.module.css";


const About = () => {

  return (
    <div>

      <div className={`${styles.imgInicio}`}>
        <img src="/imagenes/Banner.png" alt="logo" className={`${styles.img1} img-fluid animate__animated animate__zoomIn`} />
      </div>



      <div class="container marketing">





        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">Inicios</h2>
            <p class="lead">Anver repostería nace de la idea de 3 hermanas, por ello es que al ser una empresa familiar pensamos en aquellos ricos sabores repostería caseros utilizando ingredientes finos y frescos para dar nuestro famoso "toque gourmet", todo esto sin dejar de lado los exquisitos sabores artesanales en todos nuestros productos y con una calidad insuperable. Nuestra empresa se enorgullece de siempre brindar un excelente servicio, tanto en los métodos de aseguramiento de la calidad como en la frescura y selección exclusiva de nuestros ingredientes cuidando cada detalle de nuestro producto final.</p>
          </div>
          <div class="col-md-5">
            <img src="/imagenes/img_galletas2.jpg" class={`${styles.banner} d-block w-100 animate__animated animate__slideInRight`} alt="" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Mision</h2>
            <p class="lead">Anver es una empresa dedicada a la creación y venta de arte dulce a través de la fusión de técnicas tradicionales e internacionales, con el propósito que nuestros clientes vivan experiencias únicas y sorprendentes, con alto valor nutricional y de alta calidad a un precio justo. Centramos los esfuerzos en llevar conocimientos y nuevas experiencias culinarias a nuestros clientes internos y externos.
            </p>
            <br />
            <h2 class="featurette-heading fw-normal lh-1">Vision</h2>
            <p class="lead">Llegar a ser una empresa reconocida por su excelencia en su servicio y en la calidad de sus productos.
              Ser el referente gastronómico preferido de la región como repostería, manteniendo la innovación, ofreciendo servicios y productos que sobrepasen las expectativas de nuestros clientes. Logrando para el año 2028 apertura de cinco tiendas físicas, por medio de la optimización de los procesos de producción y plan de ventas.

            </p>
          </div>
          <div class="col-md-5 order-md-1">
          <img src="/imagenes/cup.png" class={`${styles.banner} d-block w-100 animate__animated animate__slideInLeft`} alt="" />

          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">Objetivos</h2>
            <p class="lead">Mejorar continuamente la calidad, productividad y rentabilidad de nuestra organización, con el fin de permanecer y crecer el mercado de la repostería.
</p>
          </div>
          <div class="col-md-5">
          <img src="/imagenes/cajas.png" class={`${styles.banner} d-block w-100 animate__animated animate__slideInRight`} alt="" />

          </div>
        </div>



      </div>

      <div className="navbar fixed-bottom d-flex flex-row-reverse m-3">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/573122115949?text=Estoy%20interesado%20en%20Tu%20Producto%20En%20Venta"> <img width="60" alt="Chat on WhatsApp" src="../imagenes/whatsapp.png" /> </a>
      </div>



    </div>

  )

}
export default About;