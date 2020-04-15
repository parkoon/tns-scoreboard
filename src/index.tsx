import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import GlobalProvider from './context/GlobalContext';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename="/">
            <GlobalProvider>
                <h1 style={{ fontSize: '20rem' }}>
                    해당 사이트를 이용할 수 없습니다. 이용하시려면 박종혁님에게 문의 바랍니다.
                </h1>
            </GlobalProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
