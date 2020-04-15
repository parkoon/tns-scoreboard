import React, { useContext, useEffect, useRef } from 'react';
import { PageHeader } from 'antd';
import ScoreBoard from '../molecules/ScoreBoard';
import Center from '../atoms/Center';
import { GlobalContext } from '../../context/GlobalContext';
import {
    toggleMatchPoint,
    toggleServeTurn,
    increaseGameScore,
    increaseGamePoint,
    toggleTiebreak,
    increaseTieScore,
    toggleDuce,
} from '../actions';
import { Team, Score } from '../../interface/team';
import SettingBox from '../molecules/SettingBox';
import { TENNIS_GAME_POINT } from '../../constants/game';
import { downloadImage } from '../../helpers/htmlToImage';

function ScoreBoardPage() {
    const scoreBoardRef = useRef<HTMLDivElement>(null);
    const { state, dispatch } = useContext(GlobalContext);

    console.log(state, `from scorebord page`);
    const { teamA, teamB, isMatchPoint, isTieBreak, isDuce } = state;

    const handleMatchChange = (value: boolean) => {
        dispatch(toggleMatchPoint(value));
    };

    const handleServeChange = (team: Team) => {
        dispatch(toggleServeTurn(team));
    };
    const handleIncreaseScore = (type: Score, team: Team) => {
        type === 'normal' ? dispatch(increaseGameScore(team)) : dispatch(increaseTieScore(team));
    };

    const handleImagePrint = () => {
        if (scoreBoardRef.current) {
            downloadImage(scoreBoardRef.current);
        }
    };

    useEffect(() => {
        if (teamA.gameScore === TENNIS_GAME_POINT.length) {
            dispatch(increaseGamePoint('ds'));
        }
        if (teamB.gameScore === TENNIS_GAME_POINT.length) {
            dispatch(increaseGamePoint('hd'));
        }
    }, [teamA.gameScore, teamB.gameScore, dispatch]);

    useEffect(() => {
        // 타이 브레이크 시작
        if (teamA.gamePoint === 5 && teamB.gamePoint === 5) {
            dispatch(toggleTiebreak(true));
        }
    }, [teamA.gamePoint, teamB.gamePoint, dispatch]);

    useEffect(() => {
        // 매치 포인트
        if (teamA.tieScore >= 6 || teamB.tieScore >= 6) {
            dispatch(toggleMatchPoint(true));
            dispatch(toggleDuce(false));
        }
        // 듀스 & 매치 포인트 해제
        if (teamA.tieScore === teamB.tieScore && teamA.tieScore >= 6 && teamB.tieScore >= 6) {
            dispatch(toggleDuce(true));
            dispatch(toggleMatchPoint(false));
        }
    }, [teamA.tieScore, teamB.tieScore, dispatch]);
    return (
        <>
            <PageHeader
                style={{ boxShadow: '0px 1px 3px rgba(0,0,0,0.2)' }}
                ghost={false}
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />

            <Center>
                <ScoreBoard
                    onIncreaseScore={handleIncreaseScore}
                    isMatchPoint={isMatchPoint}
                    isTieBreak={isTieBreak}
                    teamA={teamA}
                    teamB={teamB}
                    htmlRef={scoreBoardRef}
                />
                <SettingBox
                    onServeChange={handleServeChange}
                    onMatchChange={handleMatchChange}
                    onImagePrintClick={handleImagePrint}
                />
            </Center>
        </>
    );
}

export default ScoreBoardPage;
