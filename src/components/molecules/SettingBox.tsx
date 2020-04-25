import React from 'react';
import { FileJpgOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import GameStateSwitch from './GameStateSwitch';

import GameStateRadio from './GameStateRadio';
import { Team } from '../../interface/team';
import styled from 'styled-components';
import Spacing from '../atoms/Spacing';

const StyledSettingBoxWrapper = styled.div``;

type SettingBoxTypes = {
    onServeChange: (value: Team) => void;
    onMatchChange: (value: boolean) => void;
    onDuceChange: (value: boolean) => void;
    onAdChange: (value: Team) => void;
    onImagePrintClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    isMatchPoint: boolean;
    isDeuce: boolean;
    serveTurn: Team;
    adTurn: Team | 'reset';
};
function SettingBox({
    onMatchChange,
    onServeChange,
    onDuceChange,
    onAdChange,
    onImagePrintClick,
    isMatchPoint = false,
    isDeuce = false,
    serveTurn = 'ds',
    adTurn = 'reset',
}: SettingBoxTypes) {
    return (
        <StyledSettingBoxWrapper>
            <GameStateSwitch title="매치 포인트" checked={isMatchPoint} onChange={onMatchChange} />
            <Spacing />
            <GameStateSwitch title="듀스" checked={isDeuce} onChange={onDuceChange} />
            <Spacing />
            <GameStateRadio title="서브" setTurn={serveTurn} onChange={onServeChange} />
            <Spacing />
            <GameStateRadio title="노 애드" setTurn={adTurn} onChange={onAdChange} isReset={true} />
            <Spacing />
            <Button size="large" block icon={<FileJpgOutlined />} onClick={onImagePrintClick}>
                이미지로 출력하기
            </Button>
        </StyledSettingBoxWrapper>
    );
}

export default SettingBox;
