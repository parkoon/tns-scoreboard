import { Team, Member } from '../../interface/team';

export const SET_MEMBER = 'SET_MEMBER' as const;
export const TOGGLE_MATCH_POINT = 'TOGGLE_MATCH_POINT' as const;
export const INCREASE_GAME_SCORE = 'INCREASE_GAME_SCORE' as const;
export const DECREASE_GAME_SCORE = 'DECREASE_GAME_SCORE' as const;

export const setMember = (payload: Member) => ({ type: SET_MEMBER, payload });
export const toggleMatchPoint = (payload: boolean) => ({ type: TOGGLE_MATCH_POINT, payload });
export const increaseGameScore = (team: Team) => ({ type: INCREASE_GAME_SCORE });
export const decreaseGameScore = (team: Team) => ({ type: DECREASE_GAME_SCORE });

export type GlobalAction =
    | ReturnType<typeof setMember>
    | ReturnType<typeof toggleMatchPoint>
    | ReturnType<typeof increaseGameScore>
    | ReturnType<typeof decreaseGameScore>;
