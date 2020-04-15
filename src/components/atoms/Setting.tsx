import React from 'react';
import styled from 'styled-components';

import { SettingFilled } from '@ant-design/icons';

const StyledSettingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50px; */
    /* height: 50px; */
    padding: 10px;
    border-radius: 50%;
    position: fixed;
    right: 12px;
    bottom: 12px;
    background: #fff;
    cursor: pointer;
    font-size: 2rem;
    transition: 0.2s;

    &:hover {
        background: #bdc3c7;
    }
`;
type SettingTypes = {
    onClick: () => void;
};
function Setting({ ...props }: SettingTypes) {
    return (
        <StyledSettingWrapper {...props}>
            <SettingFilled />
        </StyledSettingWrapper>
    );
}

export default Setting;
