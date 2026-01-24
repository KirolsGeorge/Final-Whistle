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

    // <div className='dropdown'>
    //   <div tabIndex={0} role='button' className='btn m-1'>
    //     Click
    //   </div>
    //   <ul tabIndex={-1} className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
    //     {teams.map((team, index) => (
    //       <li key={index} >
    //         <div className='flex items-center'>
    //           <img src={team.crest} alt={team.name} className='size-5' />
    //           <span>{team.name}</span>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
