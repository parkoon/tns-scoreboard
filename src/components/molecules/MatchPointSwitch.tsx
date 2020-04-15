import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';

const StyledSwitchWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const SwitchTitle = styled.span`
    margin-right: 7px;
`;

type MatchPointSwitchTypes = {
    onChange: (value: boolean) => void;
};
function MatchPointSwitch({ onChange }: MatchPointSwitchTypes) {
    return (
        <StyledSwitchWrapper>
            <SwitchTitle>매치 포인트</SwitchTitle>
            <Switch onChange={onChange} />
        </StyledSwitchWrapper>
    );
}

export default MatchPointSwitch;
