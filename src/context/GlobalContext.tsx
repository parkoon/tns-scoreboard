import React, { createContext, useState, useReducer } from 'react';
import { Team } from '../interface/team';

const initialState: GlobalStateType = {
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

type GlobalStateType = {
    teamA: TeamType;
    teamB: TeamType;
    isMatchPoint: boolean;
};
type TeamType = {
    members: [];
    gameScore: number;
    gamePoint: number;
};

type GlobalAction =
    | ReturnType<typeof setMember>
    | ReturnType<typeof toggleMatchPoint>
    | ReturnType<typeof increaseGameScore>
    | ReturnType<typeof decreaseGameScore>;

export const GlobalContext = createContext<{
    state: GlobalStateType;
    dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const SET_MEMBER = 'SET_MEMBER' as const;
export const TOGGLE_MATCH_POINT = 'TOGGLE_MATCH_POINT' as const;
export const INCREASE_GAME_SCORE = 'INCREASE_GAME_SCORE' as const;
export const DECREASE_GAME_SCORE = 'DECREASE_GAME_SCORE' as const;

const setMember = (payload: { team: Team; name: string }) => ({ type: SET_MEMBER, payload });
const toggleMatchPoint = () => ({ type: TOGGLE_MATCH_POINT });
const increaseGameScore = (team: Team) => ({ type: INCREASE_GAME_SCORE });
const decreaseGameScore = (team: Team) => ({ type: DECREASE_GAME_SCORE });

const { Provider } = GlobalContext;

type GlobalProviderType = {
    children: React.ReactNode;
};

function GlobalProvider({ children }: GlobalProviderType) {
    const [state, dispatch] = useReducer((state: GlobalStateType, action: GlobalAction) => {
        switch (action.type) {
            case INCREASE_GAME_SCORE:
                return state;
            case DECREASE_GAME_SCORE:
                return state;
            case TOGGLE_MATCH_POINT:
                return state;
            case SET_MEMBER:
                return state;
            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default GlobalProvider;
