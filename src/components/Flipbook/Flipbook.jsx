import React from "react";
import { FlipbookContainer, Flipbook as FlipbookComponent, Page, Download } from "./FlipbookStyles";
import Uno from '../../assets/images/catalog/catalog_page-0001.jpg';
import Dos from '../../assets/images/catalog/catalog_page-0002.jpg';
import Tre from '../../assets/images/catalog/catalog_page-0003.jpg';

function Flipbook(props){
    return(
        <FlipbookContainer>
            <FlipbookComponent className={props.id}>
                <Page image={Uno}/>
                <Page image={Dos}/>
                <Page image={Tre}/>
            </FlipbookComponent>
            <Download href={props.link} download>Descargar catálogo</Download>
        </FlipbookContainer>
    )
}

export default Flipbook;
