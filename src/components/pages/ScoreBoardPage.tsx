import React from 'react';
import { PageHeader } from 'antd';
import ScoreBoard from '../molecules/ScoreBoard';
import Center from '../atoms/Center';
import MatchPointSwitch from '../molecules/MatchPointSwitch';

function ScoreBoardPage() {
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
                <ScoreBoard />
                <MatchPointSwitch />
            </Center>
        </>
    );
}

export default ScoreBoardPage;
