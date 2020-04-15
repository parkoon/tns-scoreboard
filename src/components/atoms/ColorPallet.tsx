import React from 'react';
import styled from 'styled-components';

const StyledColorPallet = styled.div`
    width: 50px;
    height: 25px;
    display: flex;
    margin-bottom: 12px;
`;

const StyledLeftColor = styled.div`
    width: 50%;
    height: 100%;
    background: blue;
`;
const StyledRightColor = styled.div`
    width: 50%;
    height: 100%;
    background: red;
`;

function ColorPallet() {
    return (
        <StyledColorPallet>
            <StyledLeftColor />
            <StyledRightColor />
        </StyledColorPallet>
    );
}

export default ColorPallet;
