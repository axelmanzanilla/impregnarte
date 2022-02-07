import styled from "styled-components";

const theme = {
    width: '500px',
    height: '500px'
}

export const H2 = styled.h2`
    text-align: center;
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 768px){
        max-height: ${theme.height};
    }
`;

export const Display = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vw;

    @media (min-width: 768px){
        position: relative;
        width: ${theme.width};
    }
`;

export const Button = styled.button`
    display: none;

    @media (min-width: 768px){
        position: absolute;
        z-index: 1;
        display: initial;
        width: 80px;
        height: ${theme.height};
        border: none;
        font-size: 40px;
        color: white;
        background-color: black;
        opacity: 0.1;
        transition: opacity 0.5s;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.8;
    }
`;

export const Previous = styled(Button).attrs({
    className: 'slider-previous-button'
})`
    @media (min-width: 768px){
        left: 0;
    }
`;

export const Next = styled(Button).attrs({
    className: 'slider-next-button'
})`
    @media (min-width: 768px){
        right: 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vw;
    overflow: hidden;

    @media (min-width: 768px){
        max-height: ${theme.height};
    }
`;

export const List = styled.div.attrs({
    className: 'slider-image-list'
})`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    transform: translate3d(calc(-1 * 100vw), 0px, 0px);

    @media (min-width: 768px){
        transform: translate3d(-${theme.height}, 0px, 0px);
    }
`;

export const ImageDiv = styled.div.attrs({
    className: 'slider-image'
})`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Dots = styled.div`
    display: flex;
    align-items: center;
    margin-top: -20px;
    min-height: 24px;
    z-index: 1;
`;

export const DotContainer = styled.div`
    display: flex;

    &:not(:last-child){
        margin-right: 8px;
    }
`;

export const Input = styled.input`
    display: none;

    &:checked + label{
        width: 20px;
        height: 20px;
    }
`;

export const Dot = styled.label`
    width: 10px;
    height: 10px;
    padding: 0px;
    border-radius: 50%;
    cursor: pointer;
    background-color: black;
    border: 2px solid white;
    transition: all 0.5s ease;
`;
