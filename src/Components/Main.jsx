import React from "react";
import imagenes from "../Images/imagenes";

const Main = () =>{
    return(
        <>
        <div className="container">
            <div className="row picture">
                <div className="col text-white">
                    <p>
                        HOLA, SOY ÓSCAR<br></br>
                        Bienvenido a mi portafolio, aquí podrás encontrar los proyecto de los que he hecho parte desde el aspecto front como en el back.
                        Estos proyectos fueron desarrollados en gran parte con tecnologías como NodeJs, Javascript, React, Java, Spring y Primefaces.
                    </p>
                </div>
                <div className="col photo">
                    <img src={imagenes.logo} width="250px" alt="La imagen no se encuentra disponible"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;