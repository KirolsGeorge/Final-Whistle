import RankingTableRow from './rankingTableRow';

export default function RankingTable() {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player Name</th>
            <th>W</th>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          {<RankingTableRow position={1} playerName='Andrew Nageh' WinScore={15} LoseScore={14} />}
          {<RankingTableRow position={2} playerName='Andrew Nageh' WinScore={14} LoseScore={13} />}
          {<RankingTableRow position={3} playerName='Andrew Nageh' WinScore={13} LoseScore={12} />}
        </tbody>
      </table>
    </div>
  );
}
