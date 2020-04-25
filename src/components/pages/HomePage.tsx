import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PlayerInputField from '../molecules/PlayerInputField';
import styled from 'styled-components';
import PlayerField from '../molecules/PlayerField';
import Center from '../atoms/Center';
import { GameScoreContext } from '../../context/GameScoreContext';
import { setMember } from '../actions';
import { Member } from '../../interface/team';
import MovingArrow from '../atoms/MovingArrow';

const StyledPlayerFieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
`;

const StyledInputFieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function HomePage() {
    const history = useHistory();
    const { dispatch, state } = useContext(GameScoreContext);
    const { teamA, teamB } = state;
    console.log(state, `from home page`);

    const handleSubmit = (member: Member) => {
        dispatch(setMember(member));
    };

    const handleArrowClick = () => {
        history.push('/board');
    };

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
                <StyledPlayerFieldWrapper>
                    <PlayerField members={teamA.members} teamTitle="팀 덕소" />
                    대
                    <PlayerField members={teamB.members} teamTitle="팀 행당" />
                </StyledPlayerFieldWrapper>
                <StyledInputFieldWrapper>
                    <PlayerInputField onSubmit={handleSubmit} />
                </StyledInputFieldWrapper>
            </Center>

            <MovingArrow onClick={handleArrowClick} />
        </>
    );
}

export default HomePage;
