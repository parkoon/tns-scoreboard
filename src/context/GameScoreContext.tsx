import React, { createContext, useReducer } from 'react';
import {
    INCREASE_GAME_SCORE,
    DECREASE_GAME_SCORE,
    TOGGLE_MATCH_POINT,
    SET_MEMBER,
    GlobalAction,
    TOGGLE_SERVE_TURN,
    INCREASE_GAME_POINT,
    TOGGLE_TIEBREAK,
    INCREASE_TIE_SCORE,
    TOGGLE_DUCE,
    DECREASE_GAME_POINT,
    DECREASE_TIE_SCORE,
    CHANGE_AD,
} from '../components/actions';

const initialState: InitialStateTypes = {
    teamA: {
        members: ['박종혁', '김진아'],
        gameScore: 0,
        gamePoint: 0,
        tieScore: 0,
        isServeTurn: true,
        isAd: false,
    },
    teamB: {
        members: ['김근태', '최미란'],
        gameScore: 0,
        gamePoint: 0,
        tieScore: 0,
        isServeTurn: false,
        isAd: false,
    },
    isTieBreak: false,
    isMatchPoint: false,
    isDuce: false,
};

type InitialStateTypes = {
    teamA: TeamObjectTypes;
    teamB: TeamObjectTypes;
    isMatchPoint: boolean;
    isTieBreak: boolean;
    isDuce: boolean;
};
export type TeamObjectTypes = {
    members: string[];
    gameScore: number;
    gamePoint: number;
    tieScore: number;
    isServeTurn: boolean;
    isAd: boolean;
};

export const GameScoreContext = createContext<{
    state: InitialStateTypes;
    dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const { Provider } = GameScoreContext;

type GameScoreProviderType = {
    children: React.ReactNode;
};

function GameScoreProvider({ children }: GameScoreProviderType) {
    const [state, dispatch] = useReducer((state: InitialStateTypes, action: GlobalAction) => {
        switch (action.type) {
            case CHANGE_AD:
                if (action.payload === 'reset') {
                    return {
                        ...state,
                        isDuce: false,
                        teamA: {
                            ...state.teamA,
                            isAd: false,
                        },
                        teamB: {
                            ...state.teamB,
                            isAd: false,
                        },
                    };
                }
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        isDuce: false,
                        teamA: {
                            ...state.teamA,
                            isAd: true,
                        },
                        teamB: {
                            ...state.teamB,
                            isAd: false,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            isAd: true,
                        },
                        teamA: {
                            ...state.teamA,
                            isAd: false,
                        },
                    };
                }

                return state;

            case INCREASE_GAME_SCORE:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            gameScore: state.teamA.gameScore + 1,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            gameScore: state.teamB.gameScore + 1,
                        },
                    };
                }
                return state;
            case INCREASE_GAME_POINT:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            gameScore: 0,
                            isAd: false,
                            gamePoint: state.teamA.gamePoint + 1,
                        },
                        teamB: {
                            ...state.teamB,
                            isAd: false,
                            gameScore: 0,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            isAd: false,
                            gameScore: 0,
                        },
                        teamB: {
                            ...state.teamB,
                            isAd: false,
                            gameScore: 0,
                            gamePoint: state.teamB.gamePoint + 1,
                        },
                    };
                }
                return state;
            case INCREASE_TIE_SCORE:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            tieScore: state.teamA.tieScore + 1,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            tieScore: state.teamB.tieScore + 1,
                        },
                    };
                }
                return state;
            case DECREASE_TIE_SCORE:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            tieScore: state.teamA.tieScore - 1,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            tieScore: state.teamB.tieScore - 1,
                        },
                    };
                }
                return state;
            case DECREASE_GAME_POINT:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            gameScore: 0,
                            gamePoint: state.teamA.gamePoint - 1,
                        },
                        teamB: {
                            ...state.teamB,
                            gameScore: 0,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            gameScore: 0,
                        },
                        teamB: {
                            ...state.teamB,
                            gameScore: 0,
                            gamePoint: state.teamB.gamePoint - 1,
                        },
                    };
                }
                return state;
            case DECREASE_GAME_SCORE:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            gameScore: state.teamA.gameScore - 1,
                        },
                    };
                }

                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            gameScore: state.teamB.gameScore - 1,
                        },
                    };
                }
                return state;

            case TOGGLE_MATCH_POINT:
                return {
                    ...state,
                    isMatchPoint: action.payload,
                };
            case TOGGLE_TIEBREAK:
                return {
                    ...state,
                    isTieBreak: action.payload,
                };
            case TOGGLE_DUCE:
                console.log('action.payload', action.payload);
                return {
                    ...state,
                    isDuce: action.payload,
                };
            case TOGGLE_SERVE_TURN:
                if (action.payload === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            isServeTurn: true,
                        },
                        teamB: {
                            ...state.teamB,
                            isServeTurn: false,
                        },
                    };
                }
                if (action.payload === 'hd') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            isServeTurn: false,
                        },
                        teamB: {
                            ...state.teamB,
                            isServeTurn: true,
                        },
                    };
                }
                return state;
            case SET_MEMBER: {
                const { team, player } = action.payload;
                if (team === 'ds') {
                    return {
                        ...state,
                        teamA: {
                            ...state.teamA,
                            members: [state.teamA.members[state.teamA.members.length - 1], player],
                        },
                    };
                }

                if (team === 'hd') {
                    return {
                        ...state,
                        teamB: {
                            ...state.teamB,
                            members: [state.teamB.members[state.teamB.members.length - 1], player],
                        },
                    };
                }

                return state;
            }

            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export default GameScoreProvider;
