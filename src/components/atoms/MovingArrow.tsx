import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import styled, { keyframes, css } from 'styled-components';

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

const moveLeft = keyframes`
0% {
        left: 10px
    }
    50% {
        left: -20px
    }
    100% {
        left: 10px
    }
`;

const StyledArrowWrapper = styled.div<{ dir: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 9rem;
    opacity: 0.7;
    cursor: pointer;

    ${(props) =>
        props.dir === 'right'
            ? css`
                  right: 10px;
                  animation: ${moveRight} 1s infinite linear alternate;
              `
            : css`
                  left: 10px;
                  animation: ${moveLeft} 1s infinite linear alternate;
              `}
`;

type MovingArrowTypes = {
    onClick: () => void;
    dir?: 'left' | 'right';
};
function MovingArrow({ onClick, dir = 'right' }: MovingArrowTypes) {
    return (
        <StyledArrowWrapper onClick={onClick} dir={dir}>
            {dir === 'right' ? <RightOutlined /> : <LeftOutlined />}
        </StyledArrowWrapper>
    );
}

export default MovingArrow;
