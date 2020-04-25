import React, { useState } from 'react';
import { Switch as RouteSwitch, Route } from 'react-router-dom';
import { Drawer, Radio, Row } from 'antd';
import HomePage from './components/pages/HomePage';
import ScoreBoardPage from './components/pages/ScoreBoardPage';
import Setting from './components/atoms/Setting';
import ColorPallet from './components/atoms/ColorPallet';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useTheme } from './context/ThemeContext';
import { THEME_COLOR } from './constants/theme';

function App() {
    const [visible, setVisible] = useState(false);

    const { theme, setTheme } = useTheme()!;
    console.log(theme);
    const showDrawer = () => {
        setVisible(true);
    };

    const handleThemeChange = (e: RadioChangeEvent) => {
        const { value } = e.target;
        setTheme(value);
    };
    return (
        <>
            <RouteSwitch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/board">
                    <ScoreBoardPage />
                </Route>
            </RouteSwitch>
            <Drawer
                title="페이지 설정"
                placement="right"
                closable={false}
                onClose={() => setVisible(false)}
                visible={visible}
                width="320"
            >
                <Radio.Group onChange={handleThemeChange} defaultValue="clay">
                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="clay">
                            클레이
                        </Radio.Button>
                        <ColorPallet
                            primary={THEME_COLOR['clay'].primary}
                            secondary={THEME_COLOR['clay'].secondary}
                        />
                    </Row>

                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="lawn">
                            잔디
                        </Radio.Button>
                        <ColorPallet
                            primary={THEME_COLOR['lawn'].primary}
                            secondary={THEME_COLOR['lawn'].secondary}
                        />
                    </Row>
                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="hard">
                            하드
                        </Radio.Button>
                        <ColorPallet
                            primary={THEME_COLOR['hard'].primary}
                            secondary={THEME_COLOR['hard'].secondary}
                        />
                    </Row>
                </Radio.Group>
            </Drawer>
            <Setting onClick={showDrawer} />
        </>
    );
}

export default App;
