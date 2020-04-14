import React from 'react';
import styled from 'styled-components';
import Player from '../atoms/Player';

const StyledPlayerFieldWrapper = styled.div`
    position: relative;
`;

const StyledPlayerContainer = styled.div`
    width: 300px;
    height: 200px;
    padding: 0 12px 12px 12px;
    box-sizing: border-box;
`;
const StyledFieldTitle = styled.h3`
    margin-left: 12px;
`;
function PlayerField() {
    return (
        <StyledPlayerFieldWrapper>
            <StyledFieldTitle>Team Blue</StyledFieldTitle>
            <StyledPlayerContainer>
                <Player />
                <Player />
            </StyledPlayerContainer>
        </StyledPlayerFieldWrapper>
    );
}

export default PlayerField;
