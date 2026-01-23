import RankingTable from '../Componants/UI/rankingTable';

export default function RankPage() {
  return (
    <main className='p-4 flex flex-col gap-3'>
      <h1 className='font-bold'>Player's Ranking</h1>
      <RankingTable />
    </main>
  );
}
