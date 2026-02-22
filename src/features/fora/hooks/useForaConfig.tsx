import { useReducer } from 'react';
import { foraReducer, initialConfig } from '../state/foraConfigReducer';

export function useForaConfig() {
  return useReducer(foraReducer, initialConfig);
}
