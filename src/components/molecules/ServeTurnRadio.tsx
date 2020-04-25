import React from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Team } from '../../interface/team';

const StyledRadioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 240px;
`;
const RadioTitle = styled.span`
    width: 100px;
    margin-right: 7px;
`;

const StyledRadio = styled.div`
    flex: 1;
`;

type MatchPointSwitchTypes = {
    onChange: (value: Team) => void;
    serveTurn: Team;
};
function ServeTurnRadio({ onChange, serveTurn }: MatchPointSwitchTypes) {
    const hanleChange = (e: RadioChangeEvent) => {
        const { value } = e.target;
        onChange(value);
    };

    return (
        <StyledRadioWrapper>
            <RadioTitle>서브권</RadioTitle>
            <StyledRadio>
                <Radio.Group onChange={hanleChange} value={serveTurn}>
                    <Radio value="ds">덕소</Radio>
                    <Radio value="hd">행당</Radio>
                </Radio.Group>
            </StyledRadio>
        </StyledRadioWrapper>
    );
}

export default ServeTurnRadio;
