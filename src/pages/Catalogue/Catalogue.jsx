import React, { useEffect } from "react";
import { Main, H2 } from "./CatalogueStyles";
import Flipbook from "../../components/Flipbook/Flipbook";

function Catalogue(){
    const turnIds = ['nav', 'taz'];

    useEffect(() => {
        document.title = "Catálogo"
    }, []);

    useEffect(() => {
        const jquery = document.createElement('script');
        jquery.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js';
        jquery.async = false;
        document.body.appendChild(jquery);

        const turn = document.createElement('script');
        turn.src = process.env.PUBLIC_URL + '/js/turn.js';
        turn.async = false;
        document.body.appendChild(turn);

        for (let i = 0; i < turnIds.length; i++) {
            let turnId = document.createElement('script');
            turnId.src = process.env.PUBLIC_URL + `/js/turn-${turnIds[i]}.js`;
            turnId.async = false;
            document.body.appendChild(turnId);
        }
      }, []);

    return(
        <Main>
            <H2>Catálogo navideño</H2>
            <Flipbook id="nav" link={"/downloads/Catalogo Navideño 2021.pdf"} />
            <H2>Catálogo de tazas y tarros</H2>
            <Flipbook id="taz" link={"/downloads/Catalogo de tazas y tarros octubre 2021.pdf"} />
        </Main>
    )
}

export default Catalogue;
