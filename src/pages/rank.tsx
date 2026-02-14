import RankingTable from '../Components/RankingTable';

export default function RankPage() {
  return (
    <main className='p-2 flex flex-col gap-3 flex-1 size-full max-w-7xl overflow-auto'>
      <h1 className='font-bold'>Player's Ranking</h1>
      <RankingTable />
    </main>
  );
}
