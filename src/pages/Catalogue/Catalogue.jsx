import React, { useState, useEffect, useRef } from "react";
import { ElInput, ElDiv, Main, Combo, Label, Select, ButtonsContainer, Button, FlipbookContainer, Download, Next, Previous } from "./CatalogueStyles";
import { Page } from "../../components/Flipbook/FlipbookStyles";
import Loading from "../../components/Loading/Loading";
import HTMLFlipBook from "react-pageflip";

function Catalogue(){
    const [images, setImages] = useState();
    const [flipPageWidth, setFlipPageWidth] = useState("");
    const [flipPageHeight, setFlipPageHeight] = useState("");

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
        document.title = "Catálogo";
        setFlipPageWidth(window.innerWidth);
        setFlipPageHeight(window.innerHeight - 80); // Header 80px
        getSliderImages("val");
    }, []);

    // Variables del react-pageflip
    const res = 300;
    const book = useRef();

    return(
        <Main>
            {/* <label htmlFor="menu">Cerrar</label> */}
            <ElInput type="checkbox" name="menu" id="menu" />
            <ElDiv>
                <h2>Índice</h2>
                <label htmlFor="menu">Cerrar2</label>
                <ul>
                    <li onClick={e => book.current.pageFlip().flip(1)}>Cerámicas</li>
                    <li onClick={e => book.current.pageFlip().flip(6)}>Vidrios</li>
                    <li onClick={e => book.current.pageFlip().flip(8)}>Aceros</li>
                    <li onClick={e => book.current.pageFlip().flip(12)}>Aluminio</li>
                    <li onClick={e => book.current.pageFlip().flip(13)}>Textil</li>
                    <li onClick={e => book.current.pageFlip().flip(18)}>Gorras</li>
                    <li onClick={e => book.current.pageFlip().flip(19)}>Llaveros</li>
                </ul>
            </ElDiv>
            <FlipbookContainer>
                {/* <Combo>
                    <Label htmlFor="catalogue">Catálogo</Label>
                    <Select name="catalogue" id="catalogue" onChange={e => getSliderImages(e.target.value)}>
                        <option value="val">10 de Mayo</option>
                        <option value="old">Normal</option>
                    </Select>
                </Combo> */}
                {
                    !images ? ( <Loading /> ) :
                    (
                        <HTMLFlipBook
                            width={flipPageWidth}
                            height={flipPageHeight}
                            minWidth={flipPageWidth}
                            minHeight={flipPageHeight}
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
            </FlipbookContainer>
            
            <Next onClick={() => book.current.pageFlip().flipPrev()}>&lt;</Next>
            <Previous onClick={() => book.current.pageFlip().flipNext()}>&gt;</Previous>
            <Download>Descargar</Download>
        </Main>
    )
}

export default Catalogue;
