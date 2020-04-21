import React, { useContext, useEffect, useRef, useCallback } from 'react';
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
    decreaseGameScore,
    decreaseTieScore,
    decreaseGamePoint,
} from '../actions';
import { Team, Score } from '../../interface/team';
import SettingBox from '../molecules/SettingBox';
import { TENNIS_GAME_POINT } from '../../constants/game';
import { downloadImage, downloadImageToJPEG, appendImage } from '../../helpers/htmlToImage';
import MovingArrow from '../atoms/MovingArrow';
import { useHistory } from 'react-router-dom';

import '../../helpers/htmlToCanvas';
import { htmlToCanvas } from '../../helpers/htmlToCanvas';
import { useTheme } from '../../context/ThemeContext';

function ScoreBoardPage() {
    const scoreBoardRef = useRef<HTMLDivElement>(null);
    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const { theme, setTheme } = useTheme()!;

    const attached = useRef(false);

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
    const handleDecreaseScore = (type: Score, team: Team) => {
        type === 'normal' ? dispatch(decreaseGameScore(team)) : dispatch(decreaseTieScore(team));
    };

    const handleImagePrint = () => {
        if (scoreBoardRef.current) {
            // htmlToCanvas(scoreBoardRef.current);
            downloadImage(scoreBoardRef.current);
            // downloadImageToJPEG(scoreBoardRef.current);
            // appendImage(scoreBoardRef.current);
        }
    };
    const handleArrowClick = () => {
        history.push('/');
    };

    const handleKeyEvent = useCallback(
        (e: KeyboardEvent) => {
            // 81-q 87-w 65-a 83-s 1-49 2-50 13-enter
            const { keyCode } = e;

            console.log('isTieBreak', isTieBreak);
            switch (keyCode) {
                case 81:
                    isTieBreak
                        ? handleIncreaseScore('tie', 'ds')
                        : handleIncreaseScore('normal', 'ds');
                    return;
                case 87:
                    isTieBreak
                        ? handleIncreaseScore('tie', 'hd')
                        : handleIncreaseScore('normal', 'hd');

                    return;
                case 65:
                    isTieBreak
                        ? handleDecreaseScore('tie', 'ds')
                        : handleDecreaseScore('normal', 'ds');
                    return;
                case 83:
                    isTieBreak
                        ? handleDecreaseScore('tie', 'hd')
                        : handleDecreaseScore('normal', 'hd');
                    return;
                case 49:
                    handleServeChange('ds');
                    return;
                case 50:
                    handleServeChange('hd');
                    return;
                case 51:
                    handleMatchChange(true);
                    return;
                case 52:
                    handleMatchChange(false);
                    return;
                case 13:
                    handleImagePrint();
                    return;
            }
            console.log('1', e.keyCode);
        },
        [isTieBreak]
    );

    useEffect(() => {
        if (teamA.gameScore === TENNIS_GAME_POINT.length) {
            return dispatch(increaseGamePoint('ds'));
        }
        if (teamA.gameScore < 0) {
            return dispatch(decreaseGamePoint('ds'));
        }
        if (teamB.gameScore === TENNIS_GAME_POINT.length) {
            return dispatch(increaseGamePoint('hd'));
        }
        if (teamB.gameScore < 0) {
            return dispatch(decreaseGamePoint('hd'));
        }
    }, [teamA.gameScore, teamB.gameScore, dispatch]);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyEvent);
    }, []);

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
            {/* <PageHeader
                style={{ boxShadow: '0px 1px 3px rgba(0,0,0,0.2)' }}
                ghost={false}
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            /> */}

            <Center>
                <ScoreBoard
                    onIncreaseScore={handleIncreaseScore}
                    onDecreaseScore={handleDecreaseScore}
                    isMatchPoint={isMatchPoint}
                    isTieBreak={isTieBreak}
                    teamA={teamA}
                    teamB={teamB}
                    htmlRef={scoreBoardRef}
                    themeType={theme}
                />
                <SettingBox
                    isMatchPoint={isMatchPoint}
                    serveTurn={teamA.isServeTurn ? 'ds' : 'hd'}
                    onServeChange={handleServeChange}
                    onMatchChange={handleMatchChange}
                    onImagePrintClick={handleImagePrint}
                />
            </Center>

            <MovingArrow onClick={handleArrowClick} dir="left" />
        </>
    );
}

export default ScoreBoardPage;
