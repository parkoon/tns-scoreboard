import React, { useState } from 'react';
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
};
function ServeTurnRadio({ onChange }: MatchPointSwitchTypes) {
    const [value, setValue] = useState('ds');

    const hanleChange = (e: RadioChangeEvent) => {
        const { value } = e.target;
        setValue(value);
        onChange(value);
    };

    return (
        <StyledRadioWrapper>
            <RadioTitle>서브권</RadioTitle>
            <StyledRadio>
                <Radio.Group onChange={hanleChange} value={value}>
                    <Radio value="ds">덕소</Radio>
                    <Radio value="hd">행당</Radio>
                </Radio.Group>
            </StyledRadio>
        </StyledRadioWrapper>
    );
}

export default ServeTurnRadio;
