import styled from "styled-components";

export const Div = styled.div`
    @media (min-width: 768px) {
        position: relative;
        display: flex;
        justify-content: center;
        background-color: black;
        width: 40vw;
        align-self: center;
        ${props => (props.seeMore ? "" : "height: 20vw;")}
        overflow: hidden;
    }
`;

export const Img = styled.img`
    width: 100vw;
    height 100vw;

    @media (min-width: 768px){
        width: 40vw;
        height 40vw;
    }
`;

export const Button = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
        bottom: 0;
        position: absolute;
        cursor: pointer;
        width: 100%;
        text-align: center;
        color: white;
        padding: 40px 0 20px 0;
        background: rgb(0, 0, 0);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }
`;
