import styled from "styled-components";

export const Map = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IFrame = styled.iframe`
    width: 100%;
    height: 300px;
    border: none;
    margin: 0;

    @media (min-width: 768px){
        height: 500px;
    }
`;
