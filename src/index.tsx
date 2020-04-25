import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import App from './App';
import GameScoreProvider from './context/GameScoreContext';
import ThemeProvider from './context/ThemeContext';
import AppVer from './components/atoms/AppVersion';

import pjson from '../package.json';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <GameScoreProvider>
                <ThemeProvider>
                    <App />
                    <AppVer
                        appInfo={[
                            '선수 입력 🧘‍♂️',
                            '테니스 스코어 출력 0️⃣',
                            '타이 브레이크 🛡',
                            '매치 포인트 ON/OFF 🚥',
                            '서브권 넘겨주기 👏',
                            '노 애드 설정 ⚠️',
                            '듀스 설정 ⛓',
                            'PNG 로 출력하기 🌄',
                            '색 테마 변경 (잔디코트 / 하드코트 / 클레이코트) 🌇',
                        ]}
                    >
                        v.{pjson.version}
                    </AppVer>
                </ThemeProvider>
            </GameScoreProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
