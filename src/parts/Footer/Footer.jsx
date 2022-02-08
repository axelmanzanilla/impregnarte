import React from "react";
import { Footer as FooterComponent, Ul, A, Img, LinksContainer, Credits, CreditsA } from './FooterStyles';

function Footer(){
    return(
        <FooterComponent>
            <LinksContainer>
                <Ul>
                    <p>Síguenos en nuestras redes sociales:</p>
                    <li><A href="https://www.facebook.com/impregnarte" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/icons/facebook.png" alt="facebook" />Impregnarte</A></li>
                    <li><A href="https://www.instagram.com/impregnarte" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/icons/instagram.png" alt="instagram" />@impregnarte</A></li>
                </Ul>
                <Ul>
                    <p>Contáctanos:</p>
                    <li><A href="https://wa.me/529991549119" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/icons/whatsapp_white.svg" alt="whatsapp" />+52 999 154 9119</A></li>
                    <li><A href="mailto:impregnarte.contacto@gmail.com" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/icons/mail_white.svg" alt="email" />impregnarte.contacto@gmail.com</A></li>
                    <li><A href="https://goo.gl/maps/vAUvphLGBPudaVm9A" target="_blank"><Img src="https://storage.googleapis.com/assets-impregnarte/icons/place_white.svg" alt="dirección" />Calle 74 #425, Centro, 97000 Mérida, Yuc.</A></li>
                </Ul>
            </LinksContainer>
            <Credits>Impregnarte 2022. Developed by <CreditsA href="https://www.axelmanzanilla.com" target="_blank">Axel Manzanilla.</CreditsA></Credits>
        </FooterComponent>
    )
}

export default Footer;
