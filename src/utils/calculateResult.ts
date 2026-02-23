import type { ForaSubmission } from '../types/types';

export const calculateResult = (submission: ForaSubmission) => {
  let player1Wins = 0;
  let player2Wins = 0;

  submission.matches.forEach((m) => {
    if (m.matchWinner === submission.player1) player1Wins++;
    if (m.matchWinner === submission.player2) player2Wins++;
  });

  let result: 'player1' | 'player2' | 'draw';

  if (player1Wins > player2Wins) result = 'player1';
  else if (player2Wins > player1Wins) result = 'player2';
  else result = 'draw';

  return { result, player1Wins, player2Wins };
};
