import React from 'react';
import { Input, Button, Select } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Option } = Select;

const StyledPlayerInputFieldWrapper = styled.div`
    display: flex;
`;
function PlayerInputField() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <StyledPlayerInputFieldWrapper>
            <Select
                size="large"
                defaultValue="hk"
                style={{ width: 200, marginRight: '7px' }}
                onChange={handleChange}
            >
                <Option value="hk">행당</Option>
                <Option value="ds">덕소</Option>
            </Select>
            <Input
                size="large"
                placeholder="player 1"
                prefix={<UserOutlined />}
                style={{ marginRight: '7px' }}
            />
            <Button size="large" icon={<SearchOutlined />}>
                Search
            </Button>
        </StyledPlayerInputFieldWrapper>
    );
}

export default PlayerInputField;
