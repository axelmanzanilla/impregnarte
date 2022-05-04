import React, { useState, useEffect, useRef } from "react";
import { Main, FlipbookContainer, Download, Next, Previous } from "./CatalogueStyles";
import { Checkbox, IndexSlide, IndexContainer, IndexIcon, IndexTitle, Index, IndexElem } from "./CatalogueStyles";
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
            <Checkbox type="checkbox" name="menu" id="menu" />
            <IndexSlide>
                <IndexContainer>
                    <IndexTitle>ÍNDICE</IndexTitle>
                    <Index>
                        <IndexElem onClick={e => book.current.pageFlip().flip(0)}>PORTADA</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(1)}>CERÁMICAS</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(6)}>VIDRIOS</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(8)}>ACEROS</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(12)}>ALUMINIO</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(13)}>TEXTIL</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(18)}>GORRAS</IndexElem>
                        <IndexElem onClick={e => book.current.pageFlip().flip(19)}>LLAVEROS</IndexElem>
                    </Index>
                </IndexContainer>
                <IndexIcon htmlFor="menu" />
            </IndexSlide>

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
