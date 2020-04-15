import React, { useContext, useEffect } from 'react';
import { PageHeader } from 'antd';
import ScoreBoard from '../molecules/ScoreBoard';
import Center from '../atoms/Center';
import MatchPointSwitch from '../molecules/MatchPointSwitch';
import { GlobalContext } from '../../context/GlobalContext';
import {
    toggleMatchPoint,
    toggleServeTurn,
    increaseGameScore,
    increaseGamePoint,
} from '../actions';
import ServeTurnRadio from '../molecules/ServeTurnRadio';
import { Team } from '../../interface/team';
import SettingBox from '../molecules/SettingBox';
import { TENNIS_GAME_POINT } from '../../constants/game';

function ScoreBoardPage() {
    const { state, dispatch } = useContext(GlobalContext);

    console.log(state, `from scorebord page`);
    const { teamA, teamB, isMatchPoint } = state;

    const handleMatchChange = (value: boolean) => {
        dispatch(toggleMatchPoint(value));
    };

    const handleServeChange = (team: Team) => {
        dispatch(toggleServeTurn(team));
    };
    const handleIncreaseScore = (team: Team) => {
        dispatch(increaseGameScore(team));
    };

    useEffect(() => {
        console.log(teamA.gameScore + 'vs' + teamB.gameScore);
        if (teamA.gameScore === TENNIS_GAME_POINT.length) {
            dispatch(increaseGamePoint('ds'));
        }
        if (teamB.gameScore === TENNIS_GAME_POINT.length) {
            dispatch(increaseGamePoint('hd'));
        }
    }, [teamA.gameScore, teamB.gameScore, dispatch]);
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
                    teamA={teamA}
                    teamB={teamB}
                />
                <SettingBox onServeChange={handleServeChange} onMatchChange={handleMatchChange} />
            </Center>
        </>
    );
}

export default ScoreBoardPage;
