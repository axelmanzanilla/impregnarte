import styled from 'styled-components';

export const ElInput = styled.input`
    display: none;

    &:checked ~ div{
        left: 0;
    }
`;

export const ElDiv = styled.div`
    position: absolute;
    background-color: red;
    top: 100px;
    left: -250px;
    width: 250px;
    height: 300px;
    z-index: 2;
    transition: 0.3s left;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 0 40px 0;
`;

export const Combo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4px;
`;

export const Label = styled.label`
    margin: 0 4px 0 8px;
`;

export const Select = styled.select`
    width: 240px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const FlipbookContainer = styled.div`
    background-color: white;
`;

export const Download = styled.a`
    width: auto;
    margin-top: 12px;
    padding: 8px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    background-color: gray;
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
`;

export const Next = styled(Button)`
    left: 4px
`;

export const Previous = styled(Button)`
    right: 4px
`;
