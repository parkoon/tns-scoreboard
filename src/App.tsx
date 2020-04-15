import React, { useState, useContext } from 'react';
import { Switch as RouteSwitch, Route } from 'react-router-dom';
import {
    Drawer,
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Col,
    Row,
} from 'antd';
import HomePage from './components/pages/HomePage';
import ScoreBoardPage from './components/pages/ScoreBoardPage';
import Setting from './components/atoms/Setting';
import ColorPallet from './components/atoms/ColorPallet';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useTheme } from './context/ThemeContext';

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
                visible={true}
                width="420"
            >
                <Radio.Group onChange={handleThemeChange} defaultValue="clay">
                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="clay">
                            클레이
                        </Radio.Button>
                        <ColorPallet />
                    </Row>

                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="lawn">
                            잔디
                        </Radio.Button>
                        <ColorPallet />
                    </Row>
                    <Row>
                        <Radio.Button style={{ marginRight: '7px' }} value="hard">
                            하드
                        </Radio.Button>
                        <ColorPallet />
                    </Row>
                </Radio.Group>
                {/* <Form.Item label="Input">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                {
                                    title: 'Light',
                                    value: 'light',
                                    children: [{ title: 'Bamboo', value: 'bamboo' }],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Switch">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Button">
                        <Button>Button</Button>
                    </Form.Item> */}
            </Drawer>

            <Setting onClick={showDrawer} />
        </>
    );
}

export default App;
