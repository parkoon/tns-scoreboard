import React from 'react';
import styled from 'styled-components';

const StyledAppVer = styled.div`
    position: absolute;
    width: 70px;
    top: 10px;
    right: 10px;
    padding: 5px 12px;
    background: #2d3436;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;

    &:hover ~ div {
        opacity: 1;
        visibility: visible;
    }
`;

const StyledAppInfoContainer = styled.div`
    position: absolute;
    top: 55px;
    right: 10px;
    padding: 12px;
    background: #2d3436;
    border-radius: 4px;
    color: #fff;

    visibility: hidden;
    opacity: 0;

    transition: 0.3s;
`;
const StyledAppInfoItem = styled.div``;

type AppVerType = {
    children: React.ReactNode;
    appInfo?: string[];
};

function AppVer({ children, appInfo }: AppVerType) {
    return (
        <>
            <StyledAppVer>{children}</StyledAppVer>
            {appInfo && (
                <StyledAppInfoContainer>
                    {React.Children.map(appInfo, (info) => (
                        <StyledAppInfoItem>{info}</StyledAppInfoItem>
                    ))}
                </StyledAppInfoContainer>
            )}
        </>
    );
}

export default AppVer;
