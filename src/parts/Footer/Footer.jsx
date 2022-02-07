import React from "react";
import { Footer as FooterComponent, Ul, A, Img, LinksContainer, Credits, CreditsA } from './FooterStyles';
import FBimg from '../../assets/icons/facebook.png';
import IGimg from '../../assets/icons/instagram.png';
import WAimg from '../../assets/icons/whatsapp_white.svg';
import GMimg from '../../assets/icons/mail_white.svg';
import ADimg from '../../assets/icons/place_white.svg';

function Footer(){
    return(
        <FooterComponent>
            <LinksContainer>
                <Ul>
                    <p>Síguenos en nuestras redes sociales:</p>
                    <li><A href="https://www.facebook.com/impregnarte" target="_blank"><Img src={FBimg} alt="facebook" />Impregnarte</A></li>
                    <li><A href="https://www.instagram.com/impregnarte" target="_blank"><Img src={IGimg} alt="instagram" />@impregnarte</A></li>
                </Ul>
                <Ul>
                    <p>Contáctanos:</p>
                    <li><A href="https://wa.me/529991549119" target="_blank"><Img src={WAimg} alt="whatsapp" />+52 999 154 9119</A></li>
                    <li><A href="mailto:impregnarte.contacto@gmail.com" target="_blank"><Img src={GMimg} alt="email" />impregnarte.contacto@gmail.com</A></li>
                    <li><A href="https://goo.gl/maps/vAUvphLGBPudaVm9A" target="_blank"><Img src={ADimg} alt="dirección" />Calle 74 #425, Centro, 97000 Mérida, Yuc.</A></li>
                </Ul>
            </LinksContainer>
            <Credits>Impregnarte 2022. Developed by <CreditsA href="https://www.axelmanzanilla.com" target="_blank">Axel Manzanilla.</CreditsA></Credits>
        </FooterComponent>
    )
}

export default Footer;
