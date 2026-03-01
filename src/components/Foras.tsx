import { useMemo, useState } from 'react';
import type { ForasMatches, ForaSubmission } from '../types/types';
import Modal from './Modal';
import Match from './Match';

export default function Foras({ foras, teams, open, openModal, closeModal }: ForasMatches) {
  const [selectedFora, setSelectedFora] = useState<ForaSubmission>();
  function formatMatchDate(timestamp?: any) {
    if (!timestamp) return '';

    return timestamp.toDate().toLocaleDateString('en-uk', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    });
  }

  const teamsMap = useMemo(() => {
    if (!teams) return {};
    return Object.fromEntries(teams.map((team) => [team.tla, team]));
  }, [teams]);

  return (
    <div className='rounded flex flex-col gap-2'>
      {foras.map((fora) => (
        <div key={fora.foraId} className='card bg-base-100 image-full shadow-sm rounded-xl'>
          <button
            className='cursor-pointer z-10'
            onClick={() => {
              openModal();
              setSelectedFora(fora);
            }}
            data-id={fora.foraId}
          ></button>
          <div className='card-body text-white light:text-black'>
            <h2 className='card-title mb-5 mx-auto'>{formatMatchDate(fora.createdAt)}</h2>
            <div className='card-actions flex h-full'>
              <section className='flex-1 flex flex-col items-center justify-center h-full'>
                <h1 className='bold text-2xl capitalize'>{fora.player1}</h1>
              </section>
              <section className='flex-1 flex items-center justify-center h-full gap-4'>
                <h1 className={`bold text-6xl ${fora.result === 'draw' ? 'text-white light:text-black' : fora.result === 'player1' ? 'text-green-400' : 'text-error'}`}>
                  {fora.player1Wins}
                </h1>
                <h1 className='bold text-6xl'>-</h1>
                <h1 className={`bold text-6xl ${fora.result === 'draw' ? 'text-white  light:text-black' : fora.result === 'player2' ? 'text-green-400' : 'text-error'}`}>
                  {fora.player2Wins}
                </h1>
              </section>
              <section className='flex-1 flex flex-col items-center justify-center h-full'>
                <h1 className='bold text-2xl capitalize'>{fora.player2}</h1>
              </section>
            </div>
          </div>
        </div>
      ))}
      <Modal open={open} onClose={closeModal} justView={true}>
        <div className='flex flex-col gap-4 backdrop-blur-xs bg-black/10 light:bg-white/70'>
          {selectedFora &&
            selectedFora.matches?.map((match, i) => {
              if (!teams) return;
              const team1 = teamsMap[match.player1Team];
              const team2 = teamsMap[match.player2Team];
              return (
                <Match key={`match${i + 1}:`} match={match} team1={team1} team2={team2} players={{ player1: selectedFora.player1, player2: selectedFora.player2 }} />
              );
            })}
        </div>
      </Modal>
    </div>
  );
}
