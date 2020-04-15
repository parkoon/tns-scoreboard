import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import GlobalProvider from './context/GlobalContext';
import ThemeProvider from './context/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <GlobalProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </GlobalProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
