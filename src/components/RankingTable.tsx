import { usePlayers } from '../hooks/usePlayers';
import type { RankingTableRowPropsType } from '../types/types';
import ErrorMessage from './ErrorMessage';
import LoadingSkeleton from './LoadingSkeleton';

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
  const { players, loading } = usePlayers();
  return (
    <div className='overflow-x-auto'>
      {players.length === 0 && !loading && <ErrorMessage message={'No players found!'} />}
      {players.length != 0 && !loading && (
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
                  <LoadingSkeleton skeletonType='loadingPlayers' />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
