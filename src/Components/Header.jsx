import React from "react";
import imagenes from "../Images/imagenes";

const Header = () =>{
    return(
        <>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md"><img src={imagenes.logo} width="200px" alt="La imagen no se encuentra disponible"/></div>
                <div className="col-md">
                    <div className="row text-white text-center">
                        <div className="col">SOBRE MI</div>
                        <div className="col">COLECCIÓN</div>
                        <div className="col">CONTACTO</div>
                    </div>                
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;