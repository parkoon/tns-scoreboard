import React from 'react';
import { FileJpgOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import MatchPointSwitch from './MatchPointSwitch';

import ServeTurnRadio from './ServeTurnRadio';
import { Team } from '../../interface/team';
import styled from 'styled-components';
import Spacing from '../atoms/Spacing';

const StyledSettingBoxWrapper = styled.div``;

type SettingBoxTypes = {
    onServeChange: (value: Team) => void;
    onMatchChange: (value: boolean) => void;
    onImagePrintClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
function SettingBox({ onMatchChange, onServeChange, onImagePrintClick }: SettingBoxTypes) {
    return (
        <StyledSettingBoxWrapper>
            <MatchPointSwitch onChange={onMatchChange} />
            <Spacing />
            <ServeTurnRadio onChange={onServeChange} />
            <Spacing />
            <Spacing />
            <Button size="large" block icon={<FileJpgOutlined />} onClick={onImagePrintClick}>
                이미지로 출력하기
            </Button>
        </StyledSettingBoxWrapper>
    );
}

export default SettingBox;
