import type { Timestamp } from 'firebase/firestore';
import type { Dispatch, SetStateAction } from 'react';

export type DockProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  items: { icon: React.ReactNode; text: string; to: string }[];
};

export type SingleMatch = {
  player1Team: string;
  player2Team: string;
  player1Goals: number;
  player2Goals: number;
  matchWinner: string | null;
};

export type ForaMatches = {
  match: SingleMatch;
  team1: Team;
  team2: Team;
  players: {
    player1: string;
    player2: string;
  };
};

export type ForaSubmission = {
  foraId?: string;
  gameId: string;
  secret: string;
  player1: string;
  player2: string;
  matches: SingleMatch[];
  result?: 'player1' | 'player2' | 'draw';
  player1Wins?: number;
  player2Wins?: number;
  createdAt?: Timestamp;
};

export type PlayerStats = {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  totalForas: number;
};

export type PlayerFireBase = {
  id: string;
  wins: number;
  losses: number;
  draws: number;
  totalForas: number;
};

export type RankingTableRowPropsType = {
  position: number;
  playerName: string;
  winScore: number;
  loseScore: number;
  drawScore: number;
};

export type Team = {
  name: string;
  crest: string;
  tla: string;
};

export type ForasMatches = {
  foras: ForaSubmission[];
  teams: Team[] | undefined;
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type TeamsResponse = {
  teams: Team[];
};

export type UseModelReturnProps = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  isSubmitting?: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
};

export type MatchDetails = {
  teams: Team[];
  isLoading: boolean;
  error: Error | null;
};

export type MatchesData = {
  matches: MatchDetails;
};

export type ForaConfig = {
  playersCount?: number;
  matchesCount?: number;
  teamsPerMatch?: number;
};

export type ForaAction =
  | { type: 'SET_ALL'; payload: ForaConfig }
  | { type: 'SET_PLAYERS'; payload: number }
  | { type: 'SET_MATCHES'; payload: number }
  | { type: 'SET_TEAMS'; payload: number }
  | { type: 'RESET' };
