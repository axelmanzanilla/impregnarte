import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 0 40px 0;
`;

export const Checkbox = styled.input`
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
    height: 320px;
    z-index: 2;
    transition: 0.3s left;
`;

export const IndexContainer = styled.div`
    color: white;
    background-color: rgba(89, 29, 169, 0.9);
    min-width: 180px;
`;

export const IndexIcon = styled.label`
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    background: center / contain no-repeat url(https://storage.googleapis.com/assets-impregnarte/icons/menu_white.svg), rgba(89, 29, 169, 0.9);
`;

export const IndexTitle = styled.h2`
    margin: 16px 0 12px 40px;
    padding: 0;
    font-size: 24px;
`;

export const Index = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const IndexElem = styled.li`
    padding: 6px 0 6px 40px;
    font-size: 16px;
`;

export const FlipbookContainer = styled.div`
    background-color: rgb(255, 237, 241);
`;

export const Button = styled.button`
    position: absolute;
    top: 350px;
    border-radius: 100%;
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    background-color: black;
    opacity: 0.7;
`;

export const Next = styled(Button)`
    left: 4px;
`;

export const Previous = styled(Button)`
    right: 4px;
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
