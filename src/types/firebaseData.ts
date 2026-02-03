export interface SingleMatch {
  player1Team: string;
  player2Team: string;
  player1Goals: string;
  player2Gaols: string;
  matchWinner: string | null;
}

export interface ForaSubmission {
  gameId: string;
  secret: string;
  player1: string;
  player2: string;
  matches: SingleMatch[];
  foraWinner: string;
  foraLoser: string;
  createdAt: number;
}

export interface PlayerStats {
  name: string;
  wins: number;
  losses: number;
}
