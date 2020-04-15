import React from 'react';
import { PageHeader } from 'antd';
import PlayerInputField from '../molecules/PlayerInputField';
import styled from 'styled-components';
import PlayerField from '../molecules/PlayerField';
import Center from '../atoms/Center';

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
                <StyledPlayerFieldWrapper>
                    <PlayerField teamTitle="팀 덕소" />
                    대
                    <PlayerField teamTitle="팀 행당" />
                </StyledPlayerFieldWrapper>
                <StyledInputFieldWrapper>
                    <PlayerInputField />
                </StyledInputFieldWrapper>
            </Center>
        </>
    );
}

export default HomePage;
