import React from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../Images/imagenes";

const Slider = () => {
    return (
        <>
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imagenes.Repo1} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>Mortal Dev</h3>
                            <p>Juego desarrollado durante el Botcamp <a href="https://mortaldev.netlify.app/">Juégalo aquí</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imagenes.Repo2} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>Tetris JS</h3>
                            <p>Este proyecto lo realizamos mediante un tutorial de Youtube, es mi primer reto con Javascript aplicando Canva.
                            <a href="https://tetris-r85x.vercel.app"> Pruébalo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-80" src={imagenes.logo} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>Repositorio TRES</h3>
                            <p>Descripción</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Slider;