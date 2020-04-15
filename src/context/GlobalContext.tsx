import React, { createContext, useState, useReducer } from 'react';
import { Team } from '../interface/team';
import {
    INCREASE_GAME_SCORE,
    DECREASE_GAME_SCORE,
    TOGGLE_MATCH_POINT,
    SET_MEMBER,
    GlobalAction,
} from '../components/actions';

const initialState: InitialStateType = {
    teamA: {
        members: [],
        gameScore: 0,
        gamePoint: 0,
    },
    teamB: {
        members: [],
        gameScore: 0,
        gamePoint: 0,
    },
    isMatchPoint: false,
};

type InitialStateType = {
    teamA: TeamType;
    teamB: TeamType;
    isMatchPoint: boolean;
};
type TeamType = {
    members: string[];
    gameScore: number;
    gamePoint: number;
};

export const GlobalContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const { Provider } = GlobalContext;

type GlobalProviderType = {
    children: React.ReactNode;
};

function GlobalProvider({ children }: GlobalProviderType) {
    const [state, dispatch] = useReducer((state: InitialStateType, action: GlobalAction) => {
        switch (action.type) {
            case INCREASE_GAME_SCORE:
                return state;
            case DECREASE_GAME_SCORE:
                return state;
            case TOGGLE_MATCH_POINT:
                return state;
            case SET_MEMBER: {
                const { team, player } = action.payload;
                if (team === 'ds') {
                    console.log('SET_MEMBER__DS');
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            members: [state.teamA.members[state.teamA.members.length - 1], player],
                        },
                    };
                }

                if (team === 'hd') {
                    console.log('SET_MEMBER__HD');
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            members: [state.teamB.members[state.teamB.members.length - 1], player],
                        },
                    };
                }
                console.log('SET_MEMBER__ERROR');

                return state;
            }

            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default GlobalProvider;
