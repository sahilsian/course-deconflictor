'use client'
import styled from "styled-components";

const Container = styled.div`
    padding: 30px;
    border-bottom: 1px solid #FFD400;
    margin-bottom: 24px;
    background-color: #fff;
`;

const Logo = styled.img`

`;

const Navigation = () => {
    return (
        <Container>
            <Logo src="./dal-logo.png"></Logo>
        </Container>
    )
}

export default Navigation