import type { TeamsResponse, Team } from '../types';
import { useQuery } from '@tanstack/react-query';

export function useFootballAPI() {
  async function fetchTeams(): Promise<Team[]> {
    const isDev = import.meta.env.DEV;
    let data: TeamsResponse;

    if (isDev) {
      const res = await fetch('/mock-data/teams.json');
      const mock = await res.json();
      data = { teams: mock.teams } as TeamsResponse;
    } else {
      const res = await fetch('/api/teams');
      if (!res.ok) throw new Error('API Error: ' + res.status);
      data = await res.json();
    }

    return data.teams.map((team: Team) => ({
      name: team.name,
      crest: team.crest,
      tla: team.tla,
    }));
  }

  function getAllTeams() {
    const query = useQuery<Team[], Error>({
      queryKey: ['teams'],
      queryFn: fetchTeams,
      staleTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: true,
    });
    return query;
  }

  return { getAllTeams };
}
