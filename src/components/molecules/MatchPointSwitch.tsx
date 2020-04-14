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

function MatchPointSwitch() {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <StyledSwitchWrapper>
            <SwitchTitle>매치 포인트</SwitchTitle>
            <Switch defaultChecked onChange={onChange} />
        </StyledSwitchWrapper>
    );
}

export default MatchPointSwitch;
