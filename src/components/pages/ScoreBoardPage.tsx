import React, { useContext } from 'react';
import { PageHeader } from 'antd';
import ScoreBoard from '../molecules/ScoreBoard';
import Center from '../atoms/Center';
import MatchPointSwitch from '../molecules/MatchPointSwitch';
import { GlobalContext } from '../../context/GlobalContext';
import { toggleMatchPoint } from '../actions';

function ScoreBoardPage() {
    const { state, dispatch } = useContext(GlobalContext);

    console.log(state, `from scorebord page`);
    const { teamA, teamB, isMatchPoint } = state;

    const handleChange = (value: boolean) => {
        dispatch(toggleMatchPoint(value));
    };
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
                <ScoreBoard isMatchPoint={isMatchPoint} />
                <MatchPointSwitch onChange={handleChange} />
            </Center>
        </>
    );
}

export default ScoreBoardPage;
