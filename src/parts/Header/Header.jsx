import React, { useState } from "react";
import { Header as HeaderComponent, HamburguerButton, HeaderNavbar, Isotipo, Logo, Logotipo } from './HeaderStyles';
import { NavComp, NavCompUl, NavCompLi, NavCompLink } from './HeaderStyles';
import { NavMob, NavMobUl, NavMobLink } from './HeaderStyles';
import GlobalStyle from "../../Fonts";

function Header(){
    const [drop, setDrop] = useState(false);
    const toggleDrop = () => setDrop(!drop);

    return(
        <HeaderComponent>
            <HeaderNavbar>
                <Logo to='/' onClick={() => setDrop(false)}>
                    <Isotipo />
                    <GlobalStyle />
                    <Logotipo>Impregnarte</Logotipo>
                </Logo>
                <HamburguerButton onClick={toggleDrop}/>
                <NavComp>
                    <NavCompUl>
                        <NavCompLi><NavCompLink to='/'>INICIO</NavCompLink></NavCompLi>
                        <NavCompLi><NavCompLink to='/catalogo'>CATÁLOGO</NavCompLink></NavCompLi>
                        <NavCompLi><NavCompLink to='/quienes-somos'>QUIÉNES SOMOS</NavCompLink></NavCompLi>
                        <NavCompLi><NavCompLink to='/contacto'>CONTACTO</NavCompLink></NavCompLi>
                    </NavCompUl>
                </NavComp>
            </HeaderNavbar>

            <NavMob drop={drop}>
                <NavMobUl>
                    <li><NavMobLink to='/' onClick={() => setDrop(false)}>INICIO</NavMobLink></li>
                    <li><NavMobLink to='/catalogo' onClick={() => setDrop(false)}>CATÁLOGO</NavMobLink></li>
                    <li><NavMobLink to='/quienes-somos' onClick={() => setDrop(false)}>QUIÉNES SOMOS</NavMobLink></li>
                    <li><NavMobLink to='/contacto' onClick={() => setDrop(false)}>CONTACTO</NavMobLink></li>
                </NavMobUl>
            </NavMob>
        </HeaderComponent>
    )
}

export default Header;
