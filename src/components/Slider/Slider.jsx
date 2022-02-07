import React, { useState, useEffect } from "react";
import { H2, Slider as SliderComponent, Display, Previous, Next, Container, List, ImageDiv, Img, Input, Dots, DotContainer, Dot } from "./SliderStyles";

function Slider(){
    const [images, setImages] = useState();

    const getSliderImages = async function(){
        try {
            // Cargar las imagenes de la api
            let response = await fetch('https://assets.axelmanzanilla.com/slider');
            let data = await response.json();
            let dataSlider = Object.values(data).filter(d => d.includes('slider/'));
            setImages(dataSlider);
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
            script.src = process.env.PUBLIC_URL + '/js/slider.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [images]);

    return(
        <div>
            <H2>Productos Destacados</H2>
            <SliderComponent>
                <Display>
                    <Previous>&#60;</Previous>
                    <Container>
                        <List>
                        {
                            !images ? ( <p>Cargando...</p> ) :
                            (
                                <ImageDiv><Img src={`https://storage.googleapis.com/assets-impregnarte/${images[images.length - 1]}`} /></ImageDiv>
                            )
                        }
                        {
                            !images ? ( <></> ) :
                            (
                                images.map((image, i) => <ImageDiv key={i}><Img src={`https://storage.googleapis.com/assets-impregnarte/${image}`} /></ImageDiv>)
                            )
                        }
                        {
                            !images ? ( <></> ) :
                            (
                                <ImageDiv><Img src={`https://storage.googleapis.com/assets-impregnarte/${images[0]}`} /></ImageDiv>
                            )
                        }
                        </List>
                    </Container>
                    <Next>&#62;</Next>
                </Display>
                <Dots>
                {
                    !images ? ( <></> ) :
                    (
                        images.map((image, i) => <DotContainer key={i}><Input type="radio" name="slider-dot" id={image} value={i} /><Dot htmlFor={image}></Dot></DotContainer>)
                    )
                }
                </Dots>
            </SliderComponent>
        </div>
    )
}

export default Slider;
