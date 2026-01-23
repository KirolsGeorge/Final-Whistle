import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type dockItemTypes = {
  icon: IconDefinition;
  text: string;
  destination: string;
};

export type RankingTableRowPropsType = {
  position: number;
  playerName: string;
  WinScore: number;
  LoseScore: number;
};
