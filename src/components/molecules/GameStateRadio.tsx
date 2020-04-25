import React from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Team } from '../../interface/team';

const StyledRadioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;
const RadioTitle = styled.span`
    width: 100px;
    margin-right: 7px;
`;

const StyledRadio = styled.div`
    flex: 1;
`;

type MatchPointSwitchTypes = {
    title: string;
    onChange: (value: Team) => void;
    setTurn: Team | 'reset';
    isReset?: boolean;
};
function GameStateRadio({ title, onChange, setTurn, isReset = false }: MatchPointSwitchTypes) {
    const hanleChange = (e: RadioChangeEvent) => {
        const { value } = e.target;
        onChange(value);
    };

    return (
        <StyledRadioWrapper>
            <RadioTitle>{title}</RadioTitle>
            <StyledRadio>
                <Radio.Group onChange={hanleChange} value={setTurn}>
                    <Radio value="ds">덕소</Radio>
                    <Radio value="hd">행당</Radio>
                    {isReset && <Radio value="reset">리셋</Radio>}
                </Radio.Group>
            </StyledRadio>
        </StyledRadioWrapper>
    );
}

export default GameStateRadio;
