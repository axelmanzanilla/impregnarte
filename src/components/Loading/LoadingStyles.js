import styled from "styled-components";

/*
export const Loading = styled.h1`
    text-align: center;

    &::after{
        animation-name: example;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        content: '';
    }

    @keyframes example {
        0%   { content: 'Cargando'; }
        25%  { content: 'Cargando.'; }
        50%  { content: 'Cargando..'; }
        100% { content: 'Cargando...'; }
    }
`;
*/

export const Loading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;

export const Letter = styled.p`
    font-size: 32px;
    animation-name: UpAndDown;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-delay: ${props => -`${2000 - props.pos*100}`}ms;

    @keyframes UpAndDown{
        0%     { margin-top: 0px }
        10%    { margin-top: 4px }
        20%    { margin-top: 8px }
        30%    { margin-top: 12px }
        40%    { margin-top: 16px }
        50%    { margin-top: 20px }
        60%    { margin-top: 16px }
        70%    { margin-top: 12px }
        80%    { margin-top: 8px }
        90%    { margin-top: 4px }
        100%   { margin-top: 0px }
    }

    &::after{
        content: '${props => props.letra}';
    }
`;
