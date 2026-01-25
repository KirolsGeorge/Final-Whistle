import type { TeamsResponse, Team } from '../types';

export function useFootballAPI() {
  async function getAllTeams(): Promise<Team[]> {
    const lOCAL_STORAGE_KEY = 'football_teams';
    const cashed = localStorage.getItem(lOCAL_STORAGE_KEY);

    if (cashed) {
      return JSON.parse(cashed);
    }

    const res = await fetch('/api/teams');

    if (!res.ok) {
      throw new Error('API Error: ' + res.status);
    }

    const data: TeamsResponse = await res.json();

    const teams: Team[] = data.teams.map((team: Team) => ({ name: team.name, crest: team.crest, tla: team.tla }));

    localStorage.setItem(lOCAL_STORAGE_KEY, JSON.stringify(teams));

    return teams;
  }

  return { getAllTeams };
}
