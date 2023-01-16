import React from "react";
import imagenes from "../Images/imagenes";

const Header = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md"><img src={imagenes.logo} alt="La imagen no se encuentra disponible"/></div>
                <div className="col-md">Derecha</div>
            </div>
        </div>
        </>
    );
}

export default Header;