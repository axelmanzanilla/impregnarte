import styled from 'styled-components';

export const FlipbookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
}`;

export const Flipbook = styled.div.attrs({
    className: 'flipbook'
})`
    width: calc(100vw - 40px);
    height: calc(86vw - 40px);

    @media (min-width: 768px){
        width: 720px;
        height: 360px;
    }
}`;

export const Page = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props => props.image ? props.image : 's'});
}`;

export const Download = styled.a`
    width: auto;
    margin-top: 12px;
    padding: 8px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    background-color: gray;
`;
