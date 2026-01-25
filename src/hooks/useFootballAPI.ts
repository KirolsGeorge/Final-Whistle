import type { TeamsResponse, Team } from '../types';

export function useFootballAPI() {
  async function getAllTeams(): Promise<Team[]> {
    const LOCAL_STORAGE_KEY = 'football_teams';
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) return JSON.parse(cached);

    // Determine if we are in local dev
    const isDev = import.meta.env.DEV;

    let data: TeamsResponse;

    try {
      if (isDev) {
        // Local dev → fetch mock JSON
        const res = await fetch('/mock-data/teams.json');
        const mock = await res.json();

        // Wrap mock to match TeamsResponse structure if needed
        data = { teams: mock.teams } as TeamsResponse;
      } else {
        // Production → fetch real API (serverless function)
        const res = await fetch('/api/teams');
        if (!res.ok) throw new Error('API Error: ' + res.status);
        data = await res.json();
      }
    } catch (err) {
      console.error('Failed to load teams:', err);
      throw err;
    }

    const teams: Team[] = data.teams.map((team: Team) => ({
      name: team.name,
      crest: team.crest,
      tla: team.tla,
    }));

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(teams));
    return teams;
  }

  return { getAllTeams };
}
