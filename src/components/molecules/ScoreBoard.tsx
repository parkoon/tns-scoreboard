import React from 'react';
import styled from 'styled-components';
import { ThunderboltFilled } from '@ant-design/icons';

const StyledScoreBoardWrapper = styled.div`
    width: 350px;
`;
const StyledScoreBoardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2d3436;
    border: 5px solid #636e72;
    border-right: 7px solid #636e72;
    border-left: 7px solid #636e72;
`;

const StyledPlayerName = styled.span`
    flex: 2;
    color: #fff;
    letter-spacing: 4px;
    padding: 7px;
`;
const StyledServeIcon = styled.div`
    /* flex: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    color: #fdcb6e;
    text-align: center;
    font-size: 18px;
`;
const StyledGameScore = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    text-align: center;
    background: #fff;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: #e67e22;
    }
`;
const StyledGamePoint = styled.span`
    width: 50px;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBoardRow = styled.div`
    display: flex;
    font-size: 24px;
    &:first-child {
        border-bottom: 3px solid #636e72;
    }
`;

const StyledMatchPointText = styled.p`
    text-align: right;
    font-size: 17px;
    text-transform: uppercase;
    font-style: italic;
    margin-right: 7px;
    letter-spacing: 1px;
    color: #c0392b;
`;
function ScoreBoard() {
    return (
        <StyledScoreBoardWrapper>
            <StyledScoreBoardContainer>
                <StyledBoardRow>
                    <StyledServeIcon>
                        <ThunderboltFilled />
                    </StyledServeIcon>
                    <StyledPlayerName>김근태 / 박종혁</StyledPlayerName>
                    <StyledGamePoint>2</StyledGamePoint>
                    <StyledGameScore>AD</StyledGameScore>
                </StyledBoardRow>
                <StyledBoardRow>
                    <StyledServeIcon>
                        <ThunderboltFilled />
                    </StyledServeIcon>
                    <StyledPlayerName>김근태 / 박종혁</StyledPlayerName>
                    <StyledGamePoint>2</StyledGamePoint>
                    <StyledGameScore>AD</StyledGameScore>
                </StyledBoardRow>
            </StyledScoreBoardContainer>
            <StyledMatchPointText>Match Point</StyledMatchPointText>
        </StyledScoreBoardWrapper>
    );
}

export default ScoreBoard;
