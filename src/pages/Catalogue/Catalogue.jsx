import React, { useEffect } from "react";
import { Main, H2 } from "./CatalogueStyles";
import Flipbook from "../../components/Flipbook/Flipbook";
import useScript from "../../hooks/useScript";

function Catalogue(){
    useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js', false);
    useScript('https://storage.googleapis.com/assets-impregnarte/js/turn.js', false);

    useEffect(() => {
        document.title = "Catálogo"
    }, []);
    
    return(
        <Main>
            <H2>Catálogo San Valentín</H2>
            <Flipbook id="val" link="/downloads/Catalogo Febrero 2022.pdf" />
            <H2>Catálogo de tazas y tarros</H2>
            <Flipbook id="old" link="/downloads/Catalogo de tazas y tarros octubre 2021.pdf" />
        </Main>
    )
}

export default Catalogue;
