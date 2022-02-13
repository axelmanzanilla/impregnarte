import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Page } from "./FlipbookStyles";
import Loading from "../Loading/Loading";

function Flipbook(props) {
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
    const res = 300;

    return (
            <div>
                {
                    !images ? ( <Loading /> ) :
                    (
                        <HTMLFlipBook
                            width={res}
                            height={res}
                            minWidth={res}
                            minHeight={res}
                            flippingTime={800}
                            size={"stretch"}
                            maxShadowOpacity = {0.8}>
                        {
                            images.map((image, i) => <Page key={i} image={`https://storage.googleapis.com/assets-impregnarte/${image}`}/>)
                        }
                        </HTMLFlipBook>
                    )
                }
            </div>
    );
}

export default Flipbook;
