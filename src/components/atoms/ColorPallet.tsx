import React from 'react';
import styled from 'styled-components';

const StyledColorPallet = styled.div`
    width: 50px;
    height: 25px;
    display: flex;
    margin-bottom: 12px;
`;

const StyledLeftColor = styled.div<{ color: string }>`
    width: 50%;
    height: 100%;
    background: ${(props) => props.color};
`;
const StyledRightColor = styled.div<{ color: string }>`
    width: 50%;
    height: 100%;
    background: ${(props) => props.color};
`;

type ColorPallet = {
    primary: string;
    secondary: string;
};
function ColorPallet({ primary, secondary }: ColorPallet) {
    return (
        <StyledColorPallet>
            <StyledLeftColor color={primary} />
            <StyledRightColor color={secondary} />
        </StyledColorPallet>
    );
}

export default ColorPallet;
