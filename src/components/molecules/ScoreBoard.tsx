import React, { Ref } from 'react';
import styled, { css } from 'styled-components';
import { ThunderboltFilled } from '@ant-design/icons';
import { TeamObjectTypes } from '../../context/GlobalContext';
import { Team, Score } from '../../interface/team';
import { TENNIS_GAME_POINT } from '../../constants/game';

const StyledScoreBoardWrapper = styled.div`
    margin-bottom: 24px;
`;
const StyledScoreBoardContainer = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
`;

const boxShadow = `0px 0px 2px rgba(0, 0, 0, 0.2)`;

const StyledPlayerName = styled.span<{ isServeTurn: boolean }>`
    flex: 2;
    position: relative;
    font-size: 20px;
    color: #fff;
    letter-spacing: 4px;
    padding: 7px;
    padding-left: 24px;
    background: #218c74;
    margin-right: 7px;
    min-width: 240px;
    box-shadow: ${boxShadow};

    ${(props) =>
        props.isServeTurn &&
        css`
            &::before {
                content: '';
                position: absolute;
                width: 10px;
                height: 100%;
                background: #e67e22;
                left: 0;
                top: 0;
            }
        `}
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
    box-shadow: ${boxShadow};
    font-weight: bold;

    color: #e67e22;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`;
const StyledGamePoint = styled.span`
    width: 50px;
    background: #fff;
    margin-right: 7px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${boxShadow};
    font-weight: bold;
`;

const StyledBoardRow = styled.div`
    display: flex;
    font-size: 24px;
    &:first-child {
        /* border-bottom: 3px solid #636e72; */
    }
`;

const StyledGameStatus = styled.div`
    display: inline-block;
    background: #fff;
    padding: 7px 12px;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: ${boxShadow};
    font-weight: bold;
    /* border-top: 5px solid #636e72; */
    /* border-right: 7px solid #636e72; */
    /* border-left: 7px solid #636e72; */
`;

type ScoreBoardTypes = {
    isMatchPoint?: boolean;
    isTieBreak?: boolean;
    onIncreaseScore: (type: Score, team: Team) => void;
    teamA: TeamObjectTypes;
    teamB: TeamObjectTypes;
    htmlRef: Ref<HTMLDivElement>;
};
function ScoreBoard({
    onIncreaseScore,
    isMatchPoint = false,
    isTieBreak = false,
    teamA,
    teamB,
    htmlRef,
}: ScoreBoardTypes) {
    return (
        <StyledScoreBoardWrapper ref={htmlRef} id="score-board">
            {isMatchPoint ? (
                <StyledGameStatus> MATCH POINT</StyledGameStatus>
            ) : isTieBreak ? (
                <StyledGameStatus>TIEBREAK</StyledGameStatus>
            ) : null}

            <StyledScoreBoardContainer>
                <StyledBoardRow>
                    <StyledPlayerName isServeTurn={teamA.isServeTurn}>
                        {teamA.members[0]} / {teamA.members[1]}
                    </StyledPlayerName>
                    <StyledGamePoint>{teamA.gamePoint}</StyledGamePoint>
                    {!isTieBreak ? (
                        <StyledGameScore onClick={() => onIncreaseScore('normal', 'ds')}>
                            {TENNIS_GAME_POINT[teamA.gameScore]}
                        </StyledGameScore>
                    ) : (
                        <StyledGameScore onClick={() => onIncreaseScore('tie', 'ds')}>
                            {teamA.tieScore}
                        </StyledGameScore>
                    )}
                </StyledBoardRow>
                <StyledBoardRow>
                    <StyledPlayerName isServeTurn={teamB.isServeTurn}>
                        {teamB.members[0]} / {teamB.members[1]}
                    </StyledPlayerName>
                    <StyledGamePoint>{teamB.gamePoint}</StyledGamePoint>
                    {!isTieBreak ? (
                        <StyledGameScore onClick={() => onIncreaseScore('normal', 'hd')}>
                            {TENNIS_GAME_POINT[teamB.gameScore]}
                        </StyledGameScore>
                    ) : (
                        <StyledGameScore onClick={() => onIncreaseScore('tie', 'hd')}>
                            {teamB.tieScore}
                        </StyledGameScore>
                    )}
                </StyledBoardRow>
            </StyledScoreBoardContainer>
        </StyledScoreBoardWrapper>
    );
}

export default ScoreBoard;
