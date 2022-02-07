import React, { useEffect } from "react";
import { Main, H1, H2, Img } from "./AboutStyles";

function About(){
    useEffect(() => {
        document.title = "Quiénes Somos"
    }, []);

    return(
        <Main>
            <H1>¿Quiénes somos?</H1>
            <div><hr /></div>
            <p>Somos una empresa que trabaja desde la visión de la innovación a través de la integración de las herramientas
                tecnológicas propias de la técnica de impresión por sublimación, con perspectiva de crecimiento sostenido con
                la calidad en el servicio y la incorporación paulatina de tecnología para ofrecer nuevos productos y servicios
                al usuario. Incorporamos al diseño de los productos promocionales las aportaciones de los clientes, en un ciclo
                de retroalimentación para la mejora continua.</p>
            <H2>Misión</H2>
            <p>Impregnar de colores los momentos especiales de la vida</p>
            <H2>Visión</H2>
            <p>Consolidar nuestra presencia en el mercado mediante la satisfacción de las necesidades del cliente y ampliar
                la oferta de productos con el uso de tecnología de vanguardia.</p>
            <H2>Valores</H2>
            <ul>
                <li>Calidad</li>
                <li>Responsabilidad</li>
                <li>Eficiencia</li>
                <li>Aprendizaje</li>
                <li>Respeto</li>
            </ul>
        </Main>
    )
}

export default About;
