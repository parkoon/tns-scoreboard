import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';

const moveRight = keyframes`
    0% {
        right: 10px
    }
    50% {
        right: -20px
    }
    100% {
        right: 10px
    }
`;

const StyledArrowWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 9rem;
    opacity: 0.7;
    cursor: pointer;

    animation: ${moveRight} 1s infinite linear alternate;
`;

type MovingArrowTypes = {
    onClick: () => void;
};
function MovingArrow({ onClick }: MovingArrowTypes) {
    return (
        <StyledArrowWrapper onClick={onClick}>
            <RightOutlined />
        </StyledArrowWrapper>
    );
}

export default MovingArrow;
