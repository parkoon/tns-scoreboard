import React from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';

const StyledSwitchWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    width: 240px;
`;
const SwitchTitle = styled.span`
    width: 100px;
    margin-right: 7px;
`;

const StyledSwitch = styled.div`
    flex: 1;
`;

type MatchPointSwitchTypes = {
    onChange: (value: boolean) => void;
    checked: boolean;
};
function MatchPointSwitch({ onChange, checked = false }: MatchPointSwitchTypes) {
    return (
        <StyledSwitchWrapper>
            <SwitchTitle>매치 포인트</SwitchTitle>
            <StyledSwitch>
                <Switch checked={checked} onChange={onChange} />
            </StyledSwitch>
        </StyledSwitchWrapper>
    );
}

export default MatchPointSwitch;
