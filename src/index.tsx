import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import GameScoreProvider from './context/GameScoreContext';
import ThemeProvider from './context/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <GameScoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </GameScoreProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
