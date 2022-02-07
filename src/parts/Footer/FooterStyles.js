import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: black;
    color: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #591DA9;
    color: white;
    font-family: Lemon Milk Light;
    font-size: 10px;
}`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 480px){
        flex-direction: row-reverse;
        justify-content: space-around;
    }
`;

export const Ul = styled.ul`
    margin: 0 8px 20px 8px;
    padding: 0;
    list-style: none;
`;

export const A = styled.a`
    display: flex;
    align-items: center;
    margin: 0 0 4px 0;
    color: white;
    text-decoration: none;
`;

export const Img = styled.img`
    margin-right: 8px;
    height: 24px;
`;

export const Credits = styled.p`
    align-self: center;
`;

export const CreditsA = styled.a`
    color: white;
    text-decoration: none;
`;
