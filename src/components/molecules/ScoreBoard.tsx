import React, { Ref } from 'react';
import styled, { css } from 'styled-components';
import { TeamObjectTypes } from '../../context/GameScoreContext';
import { Team, Score } from '../../interface/team';
import { TENNIS_GAME_POINT } from '../../constants/game';
import { ThemeType } from '../../interface/theme';
import { THEME_COLOR } from '../../constants/theme';

const StyledScoreBoardWrapper = styled.div`
    margin-bottom: 24px;
    background: transparent;

    /* width: 380px; */
    /* height: 120px; */
    padding: 20px;
`;
const StyledScoreBoardContainer = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
`;

const boxShadow = `0px 0px 2px rgba(0, 0, 0, 0.2)`;

const StyledPlayerName = styled.span<{ isServeTurn: boolean; themeType: ThemeType }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 2;
    position: relative;
    font-size: 20px;
    color: #fff;
    letter-spacing: 4px;
    padding: 7px;
    padding-left: 24px;
    background: ${(props) => THEME_COLOR[props.themeType].primary};
    margin-right: 7px;
    min-width: 240px;
    min-height: 45px;
    box-shadow: ${boxShadow};

    ${(props) =>
        props.isServeTurn &&
        css`
            &::before {
                content: '';
                position: absolute;
                width: 10px;
                height: 100%;
                background: ${THEME_COLOR[props.themeType].secondary};
                left: 0;
                top: 0;
            }
        `}
`;

const StyledAd = styled.span`
    font-size: 14px;
`;

const StyledGameScore = styled.span<{ themeType: ThemeType }>`
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

    color: ${(props) => THEME_COLOR[props.themeType].secondary};
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
    }
`;

const StyledGameStatus = styled.div`
    display: inline-block;
    background: #fff;
    padding: 5px 0px;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: ${boxShadow};
    font-weight: bold;
    box-sizing: border-box;
    width: 150px;
    text-align: center;
`;

type ScoreBoardTypes = {
    isMatchPoint?: boolean;
    isTieBreak?: boolean;
    isDuce?: boolean;
    onIncreaseScore: (type: Score, team: Team) => void;
    onDecreaseScore: (type: Score, team: Team) => void;
    teamA: TeamObjectTypes;
    teamB: TeamObjectTypes;
    htmlRef: Ref<HTMLDivElement>;
    themeType?: ThemeType;
};
function ScoreBoard({
    onIncreaseScore,
    onDecreaseScore,
    isMatchPoint = false,
    isTieBreak = false,
    isDuce = false,
    teamA,
    teamB,
    htmlRef,
    themeType = 'clay',
}: ScoreBoardTypes) {
    console.log('themeType', themeType);
    return (
        <StyledScoreBoardWrapper ref={htmlRef} id="score-board">
            {isDuce ? (
                <StyledGameStatus> DUCE </StyledGameStatus>
            ) : isMatchPoint ? (
                <StyledGameStatus> MATCH POINT</StyledGameStatus>
            ) : isTieBreak ? (
                <StyledGameStatus>TIEBREAK</StyledGameStatus>
            ) : null}

            <StyledScoreBoardContainer>
                <StyledBoardRow>
                    <StyledPlayerName isServeTurn={teamA.isServeTurn} themeType={themeType}>
                        {teamA.members[0]} / {teamA.members[1]}
                        {teamA.isAd && <StyledAd>AD</StyledAd>}
                    </StyledPlayerName>
                    <StyledGamePoint>{teamA.gamePoint}</StyledGamePoint>
                    {!isTieBreak ? (
                        <StyledGameScore
                            themeType={themeType}
                            onClick={() => onIncreaseScore('normal', 'ds')}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                onDecreaseScore('normal', 'ds');
                            }}
                        >
                            {TENNIS_GAME_POINT[teamA.gameScore]}
                        </StyledGameScore>
                    ) : (
                        <StyledGameScore
                            themeType={themeType}
                            onClick={() => onIncreaseScore('tie', 'ds')}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                onDecreaseScore('tie', 'ds');
                            }}
                        >
                            {teamA.tieScore}
                        </StyledGameScore>
                    )}
                </StyledBoardRow>
                <StyledBoardRow>
                    <StyledPlayerName themeType={themeType} isServeTurn={teamB.isServeTurn}>
                        {teamB.members[0]} / {teamB.members[1]}
                        {teamB.isAd && <StyledAd>AD</StyledAd>}
                    </StyledPlayerName>
                    <StyledGamePoint>{teamB.gamePoint}</StyledGamePoint>
                    {!isTieBreak ? (
                        <StyledGameScore
                            themeType={themeType}
                            onClick={() => onIncreaseScore('normal', 'hd')}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                onDecreaseScore('normal', 'hd');
                            }}
                        >
                            {TENNIS_GAME_POINT[teamB.gameScore]}
                        </StyledGameScore>
                    ) : (
                        <StyledGameScore
                            themeType={themeType}
                            onClick={() => onIncreaseScore('tie', 'hd')}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                onDecreaseScore('tie', 'hd');
                            }}
                        >
                            {teamB.tieScore}
                        </StyledGameScore>
                    )}
                </StyledBoardRow>
            </StyledScoreBoardContainer>
        </StyledScoreBoardWrapper>
    );
}

export default ScoreBoard;
