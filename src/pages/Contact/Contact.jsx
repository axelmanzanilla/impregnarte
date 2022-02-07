import React, { useEffect } from "react";
import { Main, H1, Ul, Li, A, Img } from "./ContactStyles";
import WAimg from '../../assets/images/whatsapp.png';
import FBimg from '../../assets/images/facebook.png';
import IGimg from '../../assets/images/instagram.png';
import EMimg from '../../assets/images/email.png';

function Contact(){
    useEffect(() => {
        document.title = "Contacto"
    }, []);
    
    return(
        <Main>
            <H1>Contáctanos</H1>
            <div><hr /></div>
            <Ul>
                <Li><A href="https://wa.me/529991549119" target="_blank"><Img src={WAimg} />999 154 9119</A></Li>
                <Li><A href="https://www.facebook.com/impregnarte" target="_blank"><Img src={FBimg} />Impregnarte</A></Li>
                <Li><A href="https://www.instagram.com/impregnarte" target="_blank"><Img src={IGimg} />@impregnarte</A></Li>
                <Li><A href="mailto:impregnarte.contacto@gmail.com" target="_blank"><Img src={EMimg} />impregnarte.contacto@gmail.com</A></Li>
            </Ul>
        </Main>
    )
}

export default Contact;
