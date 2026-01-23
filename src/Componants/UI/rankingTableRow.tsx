import type { RankingTableRowPropsType } from '../../types';

import Avatar from '../../assets/football-player.jpg';

export default function RankingTableRow(props: RankingTableRowPropsType) {
  return (
    <tr>
      <th>{props.position}</th>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-squircle size-8'>
              <img src={Avatar} alt='Avatar Tailwind CSS Component' />
            </div>
          </div>
          <div>{props.playerName}</div>
        </div>
      </td>
      <td>{props.WinScore}</td>
      <td>{props.LoseScore}</td>
    </tr>
  );
}
