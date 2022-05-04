import React, { useState, useEffect, useRef } from "react";
import { Main, PortraitFlipbook, FlipbookContainer, Download, Next, Previous } from "./CatalogueStyles";
import { Checkbox, IndexSlide, IndexContainer, IndexIcon, IndexTitle, Index, IndexElem } from "./CatalogueStyles";
import { Page } from "../../components/Flipbook/FlipbookStyles";
import Loading from "../../components/Loading/Loading";
import HTMLFlipBook from "react-pageflip";

function Catalogue(){
    const book = useRef();
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

    const flipPage = function(page){
        book.current.pageFlip().flip(page);
        document.querySelector('.index-checkbox').checked = false;
    }

    useEffect(() => {
        document.title = "Catálogo";
        if(window.innerWidth < 768) setFlipPageWidth(window.innerWidth);
        else setFlipPageWidth(Math.trunc((window.innerWidth - 240) / 2));
        setFlipPageHeight(window.innerHeight - 80); // Header 80px
        getSliderImages("val");
    }, []);

    return(
        <Main>
            <PortraitFlipbook>
                <Checkbox type="checkbox" name="menu" id="menu" />
                <IndexSlide>
                    <IndexContainer>
                        <IndexTitle>ÍNDICE</IndexTitle>
                        <Index>
                            <IndexElem onClick={e => flipPage(0)}>PORTADA</IndexElem>
                            <IndexElem onClick={e => flipPage(1)}>CERÁMICAS</IndexElem>
                            <IndexElem onClick={e => flipPage(6)}>VIDRIOS</IndexElem>
                            <IndexElem onClick={e => flipPage(8)}>ACEROS</IndexElem>
                            <IndexElem onClick={e => flipPage(12)}>ALUMINIO</IndexElem>
                            <IndexElem onClick={e => flipPage(13)}>TEXTIL</IndexElem>
                            <IndexElem onClick={e => flipPage(18)}>GORRAS</IndexElem>
                            <IndexElem onClick={e => flipPage(19)}>LLAVEROS</IndexElem>
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
                                autoSize={true}
                                maxShadowOpacity = {0.8}>
                            {
                                images.map((image, i) => <Page key={i} image={`https://storage.googleapis.com/assets-impregnarte/${image}`}/>)
                            }
                            </HTMLFlipBook>
                        )
                    }
                </FlipbookContainer>
            </PortraitFlipbook>
            <Next onClick={() => book.current.pageFlip().flipPrev()}>&lt;</Next>
            <Previous onClick={() => book.current.pageFlip().flipNext()}>&gt;</Previous>
            <Download href='/downloads/Catalogo%2010%20Mayo.pdf' download>Descargar</Download>
        </Main>
    )
}

export default Catalogue;
