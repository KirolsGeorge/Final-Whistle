import type { Dispatch } from 'react';
import type { ForaAction } from '../types/types';

export function resetMatchesForm({ dispatch }: { dispatch?: Dispatch<ForaAction> } = {}) {
  const form = document.getElementById('matches-form') as HTMLFormElement | null;
  if (!form) return;
  if (dispatch) {
    dispatch({ type: 'RESET' });
  }
  form.reset();
}
