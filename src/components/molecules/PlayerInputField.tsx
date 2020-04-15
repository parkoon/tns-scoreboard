import React from 'react';
import { Input, Button, Select, Form } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';

const { Option } = Select;

function PlayerInputField() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleFinish = (values: any) => {
        console.log(values);
    };
    return (
        <Form onFinish={handleFinish} style={{ display: 'flex' }}>
            <Form.Item name="team" rules={[{ required: true, message: '팀을 선택해 주세요.' }]}>
                <Select
                    size="large"
                    placeholder="팀명"
                    style={{ width: 200, marginRight: '7px' }}
                    onChange={handleChange}
                >
                    <Option value="hk">행당</Option>
                    <Option value="ds">덕소</Option>
                </Select>
            </Form.Item>

            <Form.Item
                style={{ marginRight: '7px' }}
                name="player"
                rules={[{ required: true, message: '이름을 입력해 주세요.' }]}
            >
                <Input size="large" placeholder="선수명" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" size="large" icon={<UserAddOutlined />}>
                    입력
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PlayerInputField;
