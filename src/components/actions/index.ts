import { Team, Member } from '../../interface/team';

export const SET_MEMBER = 'SET_MEMBER' as const;
export const TOGGLE_MATCH_POINT = 'TOGGLE_MATCH_POINT' as const;
export const TOGGLE_SERVE_TURN = 'TOGGLE_SERVE_TURN' as const;
export const INCREASE_GAME_SCORE = 'INCREASE_GAME_SCORE' as const;
export const DECREASE_GAME_SCORE = 'DECREASE_GAME_SCORE' as const;
export const INCREASE_GAME_POINT = 'INCREASE_GAME_POINT' as const;
export const DECREASE_GAME_POINT = 'DECREASE_GAME_POINT' as const;

export const setMember = (payload: Member) => ({ type: SET_MEMBER, payload });
export const toggleMatchPoint = (payload: boolean) => ({ type: TOGGLE_MATCH_POINT, payload });
export const toggleServeTurn = (payload: Team) => ({ type: TOGGLE_SERVE_TURN, payload });
export const increaseGameScore = (payload: Team) => ({ type: INCREASE_GAME_SCORE, payload });
export const decreaseGameScore = (payload: Team) => ({ type: DECREASE_GAME_SCORE, payload });
export const increaseGamePoint = (payload: Team) => ({ type: INCREASE_GAME_POINT, payload });
export const decreaseGamePoint = (payload: Team) => ({ type: DECREASE_GAME_POINT, payload });

export type GlobalAction =
    | ReturnType<typeof setMember>
    | ReturnType<typeof toggleMatchPoint>
    | ReturnType<typeof increaseGameScore>
    | ReturnType<typeof decreaseGameScore>
    | ReturnType<typeof increaseGamePoint>
    | ReturnType<typeof decreaseGamePoint>
    | ReturnType<typeof toggleServeTurn>;
