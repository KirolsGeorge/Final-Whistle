import { usePlayers } from '../hooks/usePlayers';
import type { RankingTableRowPropsType } from '../types/types';

import Avatar from '/assets/football-player.jpg';

function RankingTableRow(props: RankingTableRowPropsType) {
  return (
    <tr>
      <th>{props.position}</th>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-circle size-8'>
              <img src={Avatar} alt='Avatar Tailwind CSS Component' />
            </div>
          </div>
          <div>{props.playerName}</div>
        </div>
      </td>
      <td>{props.winScore}</td>
      <td>{props.loseScore}</td>
      <td>{props.drawScore}</td>
    </tr>
  );
}

export default function RankingTable() {
  const { players, loading, error } = usePlayers();
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player Name</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            players.map((player, index) => (
              <RankingTableRow key={player.id} position={index + 1} playerName={player.id} winScore={player.wins} loseScore={player.losses} drawScore={player.draws} />
            ))}

          {loading && (
            <tr>
              <td colSpan={4} className='p-4'>
                <div className='flex w-52 flex-col gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='skeleton h-16 w-16 shrink-0 rounded-full'></div>
                    <div className='flex flex-col gap-4'>
                      <div className='skeleton h-4 w-20'></div>
                      <div className='skeleton h-4 w-28'></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}

          {error && (
            <tr>
              <td colSpan={4} className='p-4 text-red-500'>
                {error}
              </td>
            </tr>
          )}
          {players.length === 0 && !loading && (
            <tr>
              <td colSpan={4} className='p-4 text-red-500'>
                Add fora and try again!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
