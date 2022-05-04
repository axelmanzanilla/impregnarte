import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 0 40px 0;

    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
    }
`;

export const PortraitFlipbook = styled.div`
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
    }
`;

export const Checkbox = styled.input.attrs({
    className: 'index-checkbox'
})`
    display: none;

    &:checked ~ div{
        left: 0;
    }
`;

export const IndexSlide = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 80px;
    left: -180px;
    width: 180px;
    height: 340px;
    z-index: 2;
    transition: 0.3s left;
    font-family: Lemon Milk Light;

    @media (min-width: 768px){
        position: inherit;
        width: 240px;
        height: auto;
        background-color: rgb(255, 237, 241);
    }
`;

export const IndexContainer = styled.div`
    color: white;
    background-color: rgba(89, 29, 169, 0.9);
    min-width: 180px;

    @media (min-width: 768px){
        color: black;
        background-color: transparent;
    }
`;

export const IndexIcon = styled.label`
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    background: center / contain no-repeat url(https://storage.googleapis.com/assets-impregnarte/icons/menu_white.svg), rgba(89, 29, 169, 0.9);

    @media (min-width: 768px){
        display: none;
    }
`;

export const IndexTitle = styled.h2`
    margin: 16px 0 12px 40px;
    padding: 0;
    font-size: 24px;

    @media (min-width: 768px){
        margin: 16px 0 28px 40px;
        font-size: 28px;
    }
`;

export const Index = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const IndexElem = styled.li`
    margin: 0;
    padding: 6px 0 6px 40px;
    font-size: 16px;

    @media (min-width: 768px){
        margin: 8px 0 8px 32px;
        padding: 8px 0 8px 8px;
        font-size: 20px;
        border-radius: 8px;

        &:hover{
            cursor: pointer;
            color: white;
            background-color: rgb(89, 29, 169);
        }
    }
`;

export const FlipbookContainer = styled.div`
    flex-grow: 1;
    background-color: rgb(255, 237, 241);
`;

export const Button = styled.button`
    position: absolute;
    top: calc(50vh - 20px);
    border-radius: 100%;
    border: none;
    width: 40px;
    height: 40px;
    color: white;
    background-color: black;
    opacity: 0.3;

    @media (min-width: 768px){
        height: 80px;
        border-radius: 4px;
        font-size: 32px;

        &:hover{
            cursor: pointer;
            opacity: 1;
        }
    }
`;

export const Next = styled(Button)`
    left: 4px;

    @media (min-width: 768px){
        left: 260px;
    }
`;

export const Previous = styled(Button)`
    right: 4px;

    @media (min-width: 768px){
        right: 20px;
    }
`;

export const Download = styled.a`
    width: fit-content;
    align-self: center;
    margin-top: 12px;
    padding: 8px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    background-color: gray;
`;
