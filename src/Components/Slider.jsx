import React from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../Images/imagenes";

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.logo} alt="La imagen no se encuentra disponible"/>
                    <Carousel.Caption>
                        <h3>Repositorio UNO</h3>
                        <p>Descripción</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.logo} alt="La imagen no se encuentra disponible"/>
                    <Carousel.Caption>
                        <h3>Repositorio DOS</h3>
                        <p>Descripción</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.logo} alt="La imagen no se encuentra disponible"/>
                    <Carousel.Caption>
                        <h3>Repositorio TRES</h3>
                        <p>Descripción</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>            
        </>
    );
};

export default Slider;