import styled from 'styled-components';
import { Link } from 'react-router-dom';
import isotipoImage from '../../assets/images/isotipo.png';
import menuImage from '../../assets/icons/menu_white.svg';

const theme = {
    height: '80px',
    dropdownHeight: '150px',
    color: 'white',
    backgroundColor: 'black'
}

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    height: ${theme.height};
    background-color: ${theme.backgroundColor};
    font-family: Lemon Milk Light;
`;

export const HeaderNavbar = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${theme.height};
    background-color: ${theme.backgroundColor};
    @media (min-width: 768px){
        justify-content: space-evenly;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    height: fit-content;
    color: ${theme.color};
    text-decoration: none;
`;

export const Isotipo = styled.i`
    width: 52px;
    height: 52px;
    margin: 0 12px 4px 12px;
    background: top / contain no-repeat url(${isotipoImage});
`;

export const Logotipo = styled.p`
    margin: 0;
    font-size: 32px;
    font-family: Raleway Light;
`;

export const HamburguerButton = styled.button`
    width: 48px;
    height: 48px;
    margin: 0 12px 0 0;
    border: none;
    background: center / contain no-repeat url(${menuImage});

    @media (min-width: 768px){
        display: none;
    }
`;

export const NavComp = styled.nav`
    display: none;

    @media (min-width: 768px){
        display: flex;
    }
`;

export const NavCompUl = styled.ul`
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
        height: auto;
        padding: 0;
        color: ${theme.color};
        list-style: none;
    }
`;

export const NavCompLi = styled.li`
    @media (min-width: 768px){
        margin-right: 4px;
    }
`;

export const NavCompLink = styled(Link)`
    @media (min-width: 768px){
        display: flex;
        color: ${theme.color};
        padding: 12px;
        font-size: 16px;
        text-decoration: none;
        border-radius: 8px;
    }

    &:hover{
        background-color: #591DA9;
    }
`;

export const NavMob = styled.nav.attrs({
    className: 'dropdown-menu'
})`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${theme.dropdownHeight};
    margin-top: ${theme.height};
    background-color: ${theme.backgroundColor};
    opacity: 0.9;
    transform: translateY(-${props => props.drop ? '0' : theme.dropdownHeight});
    transition: 0.4s ease;

    @media (min-width: 768px){
        display: none;
    }
`;

export const NavMobUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const NavMobLink = styled(Link)`
    display: flex;
    color: ${theme.color};
    margin: 6px;
    font-size: 16px;
    text-decoration: none;
`;
