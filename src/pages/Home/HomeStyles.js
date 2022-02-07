import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    text-align: center;
`;

export const Welcome = styled.h2`
    padding: 20px;
    border-radius: 12px;
    margin: 12px 0 0 0;
    align-self: center;
    font-size: 20px;
    color: white;
    background: linear-gradient(90deg, rgb(90,29,169,1) 0%, rgba(78,168,255,1) 100%);

    @media (min-width: 768px){
        font-size: 40px;
    }
`;
