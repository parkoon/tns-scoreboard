import React, { useState } from 'react';
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

function App() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
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
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size="small"
                >
                    <Form.Item label="테마" name="theme">
                        <Radio.Group>
                            <Row>
                                <Radio.Button style={{ marginRight: '7px' }} value="small">
                                    클레이
                                </Radio.Button>
                                <ColorPallet />
                            </Row>

                            <Row>
                                <Radio.Button style={{ marginRight: '7px' }} value="middle">
                                    잔디
                                </Radio.Button>
                                <ColorPallet />
                            </Row>
                            <Row>
                                <Radio.Button style={{ marginRight: '7px' }} value="large">
                                    하드
                                </Radio.Button>
                                <ColorPallet />
                            </Row>
                        </Radio.Group>
                    </Form.Item>
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
                </Form>
            </Drawer>

            <Setting onClick={showDrawer} />
        </>
    );
}

export default App;
