import type { ForaAction, ForaConfig } from '../../../types/types';

export const initialConfig: ForaConfig = {
  playersCount: 2,
  matchesCount: 5,
  teamsPerMatch: 2,
};

export function foraReducer(state: ForaConfig, action: ForaAction): ForaConfig {
  switch (action.type) {
    case 'SET_ALL':
      return { ...state, ...action.payload };
    case 'SET_PLAYERS':
      return { ...state, playersCount: action.payload };
    case 'SET_MATCHES':
      return { ...state, matchesCount: action.payload };
    case 'SET_TEAMS':
      return { ...state, teamsPerMatch: action.payload };
    case 'RESET':
      return initialConfig;
    default:
      return state;
  }
}
