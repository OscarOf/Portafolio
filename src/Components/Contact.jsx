import React from "react";
import imagenes from "../Images/imagenes";

const Contact = () =>{
    return(
        <>
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-6"><a href="google.com"><img src={imagenes.Mail} width="80" alt="Imagen no disponible"/></a></div>
            </div>
            <div className="row justify-content-around text-center">
                <div className="col-4"><a href="https://github.com/OscarOf"><img src={imagenes.Git} width="80" alt="Imagen no disponible"/></a></div>
                <div className="col-4"> <a href="https://www.linkedin.com/in/oscar-orjuela-423a79264/"><img src={imagenes.Linkedin} width="75" alt="Imagen no disponible"/></a></div>
            </div>            
        </div>
        </>
    );
}

export default Contact;