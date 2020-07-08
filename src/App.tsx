import React, { useState, useEffect } from 'react';
import { Switch as RouteSwitch, Route } from 'react-router-dom';
import { Drawer, Radio, Row, Input, Button, Col, Popover } from 'antd';
import HomePage from './components/pages/HomePage';
import ScoreBoardPage from './components/pages/ScoreBoardPage';
import Setting from './components/atoms/Setting';
import ColorPallet from './components/atoms/ColorPallet';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useTheme } from './context/ThemeContext';
import { THEME_COLOR } from './constants/theme';
import { BgColorsOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;

function App() {
    const [visible, setVisible] = useState(false);

    const { theme, setTheme, setNameColor, nameColor } = useTheme()!;
    const [favoriteColors, setFavoriteColors] = useState<string[]>();

    const showDrawer = () => {
        setVisible(true);
    };

    const handleThemeChange = (e: RadioChangeEvent) => {
        const { value } = e.target;
        setTheme(value);
    };
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNameColor(value);
    };

    const addToFavoriteColor = () => {
        const colors = localStorage.getItem('colors');

        if (colors) {
            const parsedColor = JSON.parse(colors) as string[];

            if (parsedColor.includes(nameColor)) return;

            const mergedColors = [...parsedColor, nameColor];
            localStorage.setItem('colors', JSON.stringify(mergedColors));

            setFavoriteColors(mergedColors);
        } else {
            localStorage.setItem('colors', JSON.stringify([nameColor]));
            setFavoriteColors([nameColor]);
        }
    };

    const changeToFavoriteColor = (color: string) => {
        setNameColor(color);
    };
    const removeFavoriteColor = (color: string) => {
        const colors = localStorage.getItem('colors');
        if (!colors) return;

        const filteredColors = (JSON.parse(colors) as string[]).filter((c) => c !== color);
        setFavoriteColors(filteredColors);
    };
    useEffect(() => {
        const colors = localStorage.getItem('colors');
        if (colors) {
            setFavoriteColors([...JSON.parse(colors)]);
        }
    }, []);

    useEffect(() => {
        console.log(favoriteColors);
        localStorage.setItem('colors', JSON.stringify(favoriteColors));
    }, [favoriteColors]);

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
                    <Row
                        style={{
                            marginTop: '20px',
                            display: 'flex',
                            flexWrap: 'nowrap',
                            alignItems: 'center',
                        }}
                    >
                        <Input
                            placeholder="선택된 선수의 색상"
                            prefix={<BgColorsOutlined />}
                            onChange={handleColorChange}
                            value={nameColor}
                        />

                        <Popover
                            content="근태랑 미란이가 쪼아하는 색상이에요❤️"
                            title="최애 색상으로 등록하기"
                            trigger="hover"
                        >
                            <Button onClick={addToFavoriteColor}>+</Button>
                        </Popover>
                    </Row>

                    <Row style={{ marginTop: '12px', width: '100%' }}>
                        <Col span={24}>
                            <Title level={2} style={{ fontSize: '16px' }}>
                                최애 색상
                            </Title>
                        </Col>

                        {favoriteColors?.map((color) => (
                            <Col key={color} span={24} style={{ marginBottom: '7px' }}>
                                <Button onClick={() => changeToFavoriteColor(color)}>
                                    {color}
                                </Button>
                                <Button onClick={() => removeFavoriteColor(color)}>-</Button>
                            </Col>
                        ))}
                    </Row>
                </Radio.Group>
            </Drawer>
            <Setting onClick={showDrawer} />
        </>
    );
}

export default App;
