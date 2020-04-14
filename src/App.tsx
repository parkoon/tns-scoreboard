import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/atoms/Header';
import PlayerInputField from './components/molecules/PlayerInputField';
import HomePage from './components/pages/HomePage';
import ScoreBoardPage from './components/pages/ScoreBoardPage';

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/board">
                    <ScoreBoardPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
