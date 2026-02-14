export type DockProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  items: { icon: React.ReactNode; text: string; to: string }[];
};

export type SingleMatch = {
  player1Team: string;
  player2Team: string;
  player1Goals: string;
  player2Gaols: string;
  matchWinner: string | null;
};

export type ForaSubmission = {
  gameId: string;
  secret: string;
  player1: string;
  player2: string;
  matches: SingleMatch[];
  foraWinner: string;
  foraLoser: string;
  createdAt: number;
};

export type PlayerStats = {
  name: string;
  wins: number;
  losses: number;
};

export type RankingTableRowPropsType = {
  position: number;
  playerName: string;
  WinScore: number;
  LoseScore: number;
};

export type Team = {
  name: string;
  crest: string;
  tla: string;
};

export type TeamsResponse = {
  teams: Team[];
};

export type UseModelReturnProps = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  isSubmitting?: boolean;
};
