import React, { useEffect } from "react";
import { Main, Welcome } from "./HomeStyles";
import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";

function Home(){
    useEffect(() => {
        document.title = "Impregnarte";
    }, []);


    return(
        <Main>
            <Welcome>¡Bienvenido a nuestra página web!</Welcome>
            <Slider />
            <Map />
        </Main>
    )
}

export default Home;
