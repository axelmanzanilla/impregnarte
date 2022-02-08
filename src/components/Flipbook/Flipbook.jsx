import React, { useState, useEffect } from "react";
import { FlipbookContainer, Flipbook as FlipbookComponent, Page, Download } from "./FlipbookStyles";
import Loading from "../Loading/Loading";

function Flipbook(props){
    const [images, setImages] = useState();

    const getSliderImages = async function(){
        try {
            // Cargar las imagenes de la api
            let response = await fetch(`https://assets.impregnarte.com/catalogue/${props.id}`);
            let data = await response.json();
            setImages(Object.values(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSliderImages();
    }, []);

    useEffect(() => {
        if(images){
            // Agregar el javascript del slider a la página
            const script = document.createElement('script');
            script.src = `https://storage.googleapis.com/assets-impregnarte/js/turn-${props.id}.js`;
            script.async = false;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        }
    }, [images]);

    return(
        <FlipbookContainer>
            <FlipbookComponent className={props.id}>
            {
                !images ? ( <Loading /> ) :
                (
                    images.map((image, i) => <Page key={i} image={`https://storage.googleapis.com/assets-impregnarte/${image}`}/>)
                )
            }
            </FlipbookComponent>
            <Download href={props.link} download>Descargar catálogo</Download>
        </FlipbookContainer>
    )
}

export default Flipbook;
