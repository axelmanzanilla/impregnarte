import React, { useEffect } from "react";
import { Main, Welcome } from "./HomeStyles";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import ImgMore from "../../components/ImgMore/ImgMore";

function Home() {
    useEffect(() => {
        document.title = "Impregnarte";
    }, []);

    return (
        <Main>
            <ImgMore />
            <Welcome>¡Bienvenido a nuestra página web!</Welcome>
            <Slider />
            <Map />
        </Main>
    );
}

export default Home;
