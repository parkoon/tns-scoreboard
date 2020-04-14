import React from 'react';
import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
    background: tomato;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    color: #fff;
`;
const StyledHeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function Header() {
    return (
        <StyledHeaderWrapper>
            <StyledHeaderTitle>Tennis Score Maker</StyledHeaderTitle>
        </StyledHeaderWrapper>
    );
}

export default Header;
