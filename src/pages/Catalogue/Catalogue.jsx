import React, { useState, useEffect, useRef } from "react";
import { Main, H2, Download } from "./CatalogueStyles";
import { Page } from "../../components/Flipbook/FlipbookStyles";
import Loading from "../../components/Loading/Loading";
import HTMLFlipBook from "react-pageflip";

function Catalogue(){
    const [images, setImages] = useState();

    const getSliderImages = async function(id){
        try {
            // Cargar las imagenes de la api
            let response = await fetch(`https://assets.impregnarte.com/catalogue/${id}`);
            let data = await response.json();
            setImages(Object.values(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = "Catálogo"
        getSliderImages("val");
    }, []);
    const res = 300;
    const book = useRef();

    return(
        <Main>
            <select name="" id="" onChange={e => getSliderImages(e.target.value)}>
                <option value="val">Valentin</option>
                <option value="old">Normal</option>
            </select>
            Indice:
            <select name="" id="" onChange={e => book.current.pageFlip().flip(parseInt(e.target.value))}>
                <option value="0">Inicio</option>
                <option value="2">Llaveros de MDF</option>
                <option value="3">Mousepads</option>
                <option value="7">Portaretrato de piedra</option>
                <option value="8">Vaso térmico de acero</option>
                <option value="10">Tarro Mason</option>
                <option value="12">Tarro Cervecero</option>
                <option value="14">Botella de Aluminio</option>
                <option value="16">Taza con asa de corazón</option>
                <option value="18">Taza blanca de corazón</option>
                <option value="20">Pareja de tazas</option>
                <option value="25">Taza cónica</option>
                <option value="28">Taza blanca</option>
            </select>
            <br />
            {
                !images ? ( <Loading /> ) :
                (
                    <HTMLFlipBook
                        width={res}
                        height={res}
                        minWidth={res}
                        minHeight={res}
                        flippingTime={800}
                        ref={book}
                        size={"stretch"}
                        maxShadowOpacity = {0.8}>
                    {
                        images.map((image, i) => <Page key={i} image={`https://storage.googleapis.com/assets-impregnarte/${image}`}/>)
                    }
                    </HTMLFlipBook>
                )
            }
            <button onClick={() => book.current.pageFlip().flipPrev()}>Atras</button>
            <button>Descargar</button>
            <button onClick={() => book.current.pageFlip().flipNext(4)}>Adelante</button>
        </Main>
    )
}
/*
    
            <Flipbook id="val" link="/downloads/Catalogo Febrero 2022.pdf"/>
            <H2>Catálogo de tazas y tarros</H2>
            <Flipbook id="old" link="/downloads/Catalogo Febrero 2022.pdf" />
             */
export default Catalogue;
