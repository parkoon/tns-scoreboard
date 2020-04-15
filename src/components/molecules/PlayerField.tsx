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

type PlayeFieldType = {
    teamTitle: string;
    members: string[];
};
function PlayerField({ teamTitle, members = [] }: PlayeFieldType) {
    return (
        <StyledPlayerFieldWrapper>
            <StyledFieldTitle>{teamTitle}</StyledFieldTitle>
            <StyledPlayerContainer>
                {members.map((member, idx) => (
                    <Player key={idx} name={member} />
                ))}
            </StyledPlayerContainer>
        </StyledPlayerFieldWrapper>
    );
}

export default PlayerField;
