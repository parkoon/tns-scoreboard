import React from 'react';
import styled from 'styled-components';

const StyledPlayerWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 100%;
    height: 48%;
    margin-bottom: 2%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    /* background: tomato; */
    cursor: pointer;

    &::after {
        content: '';
        transition: 0.3s;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    &:hover {
        &::after {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    /* background-color: tomato; */
    /* color: #fff; */
`;

function Player() {
    return <StyledPlayerWrapper>Parkoon</StyledPlayerWrapper>;
}

export default Player;
