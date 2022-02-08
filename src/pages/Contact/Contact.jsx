import React, { useEffect } from "react";
import { Main, H1, Ul, Li, A, Img } from "./ContactStyles";

function Contact(){
    useEffect(() => {
        document.title = "Contacto"
    }, []);
    
    return(
        <Main>
            <H1>Contáctanos</H1>
            <div><hr /></div>
            <Ul>
                <Li><A href="https://wa.me/529991549119" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/images/whatsapp.png" />999 154 9119</A></Li>
                <Li><A href="https://www.facebook.com/impregnarte" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/images/facebook.png" />Impregnarte</A></Li>
                <Li><A href="https://www.instagram.com/impregnarte" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/images/instagram.png" />@impregnarte</A></Li>
                <Li><A href="mailto:impregnarte.contacto@gmail.com" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/images/email.png" />impregnarte.contacto@gmail.com</A></Li>
            </Ul>
        </Main>
    )
}

export default Contact;
