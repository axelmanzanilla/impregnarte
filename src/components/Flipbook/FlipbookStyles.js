import styled from "styled-components";

export const Page = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props => props.image ? props.image : 's'});
`;
