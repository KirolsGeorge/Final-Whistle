import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface DockItemTypes {
  icon: IconDefinition;
  text: string;
  destination: string;
}

export interface RankingTableRowPropsType {
  position: number;
  playerName: string;
  WinScore: number;
  LoseScore: number;
}
export interface Team {
  name: string;
  crest: string;
  tla: string;
}

export interface TeamsResponse {
  teams: Team[];
}
