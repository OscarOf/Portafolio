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
                            <p>Juego desarrollado durante el Botcamp, tecnologías usadas: Javascript, htmnl y css 
                            <a target="blank" href="https://mortaldev.netlify.app/">Juégalo aquí</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imagenes.Repo2} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>Tetris JS</h3>
                            <p>Este proyecto lo realizamos mediante un tutorial de Youtube, era nuestro primer reto con Javascript aplicando Canva.
                            <a target="blank" href="https://tetris-r85x.vercel.app"> Pruébalo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imagenes.Repo3} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>MovieCRUD</h3>
                            <p>Este fue nuestro primer  proyecto de nodeJS, el cual se implementa Express, MongoDB y React 
                            <a target="blank" href="https://crud-peliculas-front.vercel.app/"> Pruébalo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imagenes.Repo4} alt="La imagen no se encuentra disponible" />
                        <Carousel.Caption>
                            <h3>Corporación Semillas</h3>
                            <p>Este fue nuestro proyecto final, el cual se desarrolló para solucionar la problemática de recolección de donaciones de la Corporación Semillas de Esperanza en la comuna 3 de Medellín                                  
                            <a target="blank" href="https://corpo-front.vercel.app/"> Visítalo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Slider;