import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Descubra soluciones integrales!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/apex.jpg"
              text="Experiencias de nube simples y coherentes ofrecidas como servicios."
              label="Dell Technologies APEX"
              path="/dell"
            />
            <CardItem
              src="images/server.jpg"
              text="
              Nuevos niveles de innovación, automatización y seguridad con nuestros servidores PowerEdge más recientes."
              label="Servidores Dell Poweredge"
              path="/dell"
            />
            <CardItem
              src="images/powerstore.jpg"
              text="
              Almacenamiento basado en software que evoluciona a la par de su organizacion."
              label="Dell PowerStore"
              path="/dell"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/dell-latitude.jpg"
              text="
              Con características inteligentes, las laptops y 2 en 1 Latitude de Dell convierten el mundo en su lugar de trabajo."
              label="Familia Latitude"
              path="/dell"
            />
            <CardItem
              src="images/backup.jpg"
              text="
              Protección de datos escalable y segura para aplicaciones de SaaS, terminales y cargas de trabajo híbridas."
              label="APEX Backup Services"
              path="/dell"
            />
            <CardItem
              src="images/soluciones.jpg"
              text="
              Optimice la compra de tecnología y permita que su organización tenga más tiempo para centrarse en la visión global."
              label="Soluciones Dell Premier"
              path="/dell"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
