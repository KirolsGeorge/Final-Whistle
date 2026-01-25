import type { TeamsResponse, Team } from '../types';

console.log(process.env.lOCAL_STORAGE_KEY);
const lOCALSTORAGE_KEY = process.env.lOCAL_STORAGE_KEY!;

export function useFootballAPI() {
  async function getAllTeams(): Promise<Team[]> {
    const cashed = localStorage.getItem(lOCALSTORAGE_KEY);

    if (cashed) {
      return JSON.parse(cashed);
    }

    const res = await fetch('/api/teams');

    if (!res.ok) {
      throw new Error('API Error: ' + res.status);
    }

    const data: TeamsResponse = await res.json();

    const teams: Team[] = data.teams.map((team: Team) => ({ name: team.name, crest: team.crest, tla: team.tla }));

    localStorage.setItem(lOCALSTORAGE_KEY, JSON.stringify(teams));

    return teams;
  }

  return { getAllTeams };
}
