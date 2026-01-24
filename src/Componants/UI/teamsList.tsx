import { useEffect, useState } from 'react';
import { UseFootballAPI } from '../hooks/useFootballAPI';
import type { Team } from '../../types';

export default function TeamsList() {
  const [teams, setTeams] = useState<Team[]>([]);

  const teamsDataApi = UseFootballAPI();
  const { getAllTeams } = teamsDataApi;

  useEffect(() => {
    getAllTeams().then(setTeams);
  }, []);

  return (
    <select defaultValue='Pick a color' className='select'>
      <option disabled={true}>Pick a color</option>
      {teams.map((team, index) => (
        <option key={index}>
          <div className='flex items-center gap-2'>
            <img src={team.crest} alt={team.name} className='size-5' />
            <span>{team.name}</span>
          </div>
        </option>
      ))}
    </select>
  );
}
