import type { ForaMatches } from '../types/types';

export default function Match({ match, team1, team2, players }: ForaMatches) {
  return (
    <div className='rounded-xl backdrop-blur-xs bg-black/10 light:bg-white/70 border border-white/20 light:border-black/20'>
      <div className='card-actions flex h-full gap-2 p-4 items-center justify-center'>
        <section className='flex-1 flex flex-col items-center justify-center h-full gap-2'>
          <img
            src={team1.crest}
            alt={team1.name}
            className={`shadow rounded-full p-1 ${match.matchWinner === players.player1 ? 'shadow-green-400' : match.matchWinner === 'draw' ? 'shadow-white light:shadow-black' : 'shadow-error'} size-20`}
          />
          <h1 className='bold text-xl capitalize'>{players.player1}</h1>
        </section>
        <section className='flex-1 flex items-center justify-center h-full'>
          <h1 className='bold text-4xl'>{`${match.player1Goals} - ${match.player2Goals}`}</h1>
        </section>
        <section className='flex-1 flex flex-col items-center justify-center h-full gap-2'>
          <img
            src={team2.crest}
            alt={team2.name}
            className={`shadow rounded-full p-1 ${match.matchWinner === players.player2 ? 'shadow-green-400' : match.matchWinner === 'draw' ? 'shadow-white light:shadow-black' : 'shadow-error'} size-20`}
          />
          <h1 className='bold text-xl capitalize'>{players.player2}</h1>
        </section>
      </div>
    </div>
  );
}
