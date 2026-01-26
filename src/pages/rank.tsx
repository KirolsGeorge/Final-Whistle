import RankingTable from '../Componants/rankingTable';
import TeamsList from '../Componants/teamsList';

export default function RankPage() {
  return (
    <main className='p-4 flex flex-col gap-3 mx-auto w-full max-w-7xl'>
      <h1 className='font-bold'>Player's Ranking</h1>
      <RankingTable />
      <TeamsList />
    </main>
  );
}
