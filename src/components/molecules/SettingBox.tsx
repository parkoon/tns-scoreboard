import React from 'react';
import MatchPointSwitch from './MatchPointSwitch';
import ServeTurnRadio from './ServeTurnRadio';
import { Team } from '../../interface/team';
import styled from 'styled-components';
import Spacing from '../atoms/Spacing';

const StyledSettingBoxWrapper = styled.div``;

type SettingBoxTypes = {
    onServeChange: (value: Team) => void;
    onMatchChange: (value: boolean) => void;
};
function SettingBox({ onMatchChange, onServeChange }: SettingBoxTypes) {
    return (
        <StyledSettingBoxWrapper>
            <MatchPointSwitch onChange={onMatchChange} />
            <Spacing />
            <ServeTurnRadio onChange={onServeChange} />
        </StyledSettingBoxWrapper>
    );
}

export default SettingBox;
