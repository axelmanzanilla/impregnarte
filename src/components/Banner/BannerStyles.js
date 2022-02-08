import styled from "styled-components";

export const Banner = styled.img`
    width: 100vw;
    height: calc(100vw);
    background-image: url(https://storage.googleapis.com/assets-impregnarte/images/banner/square-banner.webp);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 450px){
        width: 100vw;
        height: calc(0.375 * 100vw);
        background-image: url(https://storage.googleapis.com/assets-impregnarte/images/banner/rec-banner.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
}
`;
