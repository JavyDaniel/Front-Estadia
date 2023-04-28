import React from "react";
import "../styles/home.css";
import laptop from '../images/laptop.png'
import video from '../images/video.png'
import routerr from '../images/routerr.png'
import dron from '../images/dron.png'
import almacenamiento from '../images/almacenamiento.png'
import proyector from '../images/proyector.png'
import escaner from '../images/escaner.png'
import telefono from '../images/telefono.png'
import Footer from "../common/Footer";
function Home() {
  return (
    <div>
      <div className="landing">
        <div className="fila">
          <div className="col">
            <div className="pp">
            <p>¡Bienvenido a Digiproduct!</p>
            </div>
            
            <h1>Expertos en Tecnologia</h1>
            <p>
              Somos una empresa estructurada cómo plataforma multimarca experta
              en tecnología, con años de experiencia te ofrecemos asesoría,
              planeación, desarrollo, implementación y soporte de soluciones
              personalizadas. Somos partners autorizados de miles de marcas y
              manejamos millones de productos, los más importantes e innovadores
              del mercado.
            </p>
          </div>
          <div className="col">
            <img
              src="https://digiproduct.com/wp-content/uploads/2022/10/Agente300.webp"
              alt=""
            />
          </div>
        </div>

      </div>
      <div className="portafolio">
          <div className="contenido-seccion">
            <div className="galeria">
              <div className="proyecto">
                <img
                  src={laptop}
                  alt=""
                />
                <div className="overlay">
                  <h3>Computo</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={video}
                  alt=""
                />
                <div className="overlay">
                  <h3>Video vigilacia</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={routerr}
                  alt=""
                />
                <div className="overlay">
                  <h3>Routers</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={dron}
                  alt=""
                />
                <div className="overlay">
                  <h3>Drones</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={almacenamiento}
                  alt=""
                />
                <div className="overlay">
                  <h3>Almacenamiento</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={proyector}
                  alt=""
                />
                <div className="overlay">
                  <h3>Video Proyecion</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={escaner}
                  alt=""
                />
                <div className="overlay">
                  <h3>Escaners y Lectores</h3>
                </div>
              </div>
              <div className="proyecto">
                <img
                  src={telefono}
                  alt=""
                />
                <div className="overlay">
                  <h3>Telefonia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="com">
          <p>
            Los invitamos a conocer más acerca de nuestra plataforma para que
            juntos podamos encontrar soluciones a sus necesidades y ayudarle a
            su organización a dar ese importante salto en esta nueva era de la
            transformación digital. No importa a que giro pertenezca tu empresa,
            la tecnología evoluciona todos los días y nosotros contigo.
          </p>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
