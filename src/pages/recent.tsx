import { useMemo } from 'react';
import { useFootballAPI } from '../hooks/useFootballAPI';
import { useForas } from '../hooks/useForas';
// import type { Team } from '../types/types';

export default function RecentPage() {
  const { foras, loading: forasLoading, error } = useForas();
  const { data: teams, isLoading: teamsLoading, error: teamsError } = useFootballAPI();

  function formatMatchDate(timestamp?: any) {
    if (!timestamp) return '';

    return timestamp.toDate().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'long',
    });
  }

  const teamsMap = useMemo(() => {
    if (!teams) return {};
    return Object.fromEntries(teams.map((team) => [team.name, team]));
  }, [teams]);

  if (forasLoading || teamsLoading) return <p>Loading...</p>;
  if (error) return <p className='text-red-500'>{error}</p>;
  if (!foras || foras.length === 0) return <p>No foras found</p>;

  return (
    <div>
      <h1 className='text-xl font-bold mb-6'>All Foras</h1>

      {foras.map((fora) => (
        <div key={fora.foraId} className='mb-10 border p-4 rounded'>
          <h2 className='text-lg font-semibold mb-4'>Fora Time: {formatMatchDate(fora.createdAt)}</h2>

          {fora.matches?.map((match, i) => {
            if (!teams) return;
            const team1 = teams.filter((team) => {
              if (team.name.includes(match.player1Team)) {
                return team;
              }
            });
            const team2 = teamsMap[match.player2Team];
            console.log('team1:' + team1);
            console.log(match.player1Team);

            return (
              <div key={`${fora.foraId}: Match ${i + 1}`} className='flex items-center gap-6 border-b py-3'>
                {/* Team 1 */}
                <div className='flex items-center gap-2'>
                  {team1 && (
                    <>
                      {/* <img src={team1.crest} alt={team1.name} className='w-8 h-8' />
                      <span>{team1.name}</span> */}
                    </>
                  )}
                </div>

                <span className='font-bold'>VS</span>

                {/* Team 2 */}
                <div className='flex items-center gap-2'>
                  {team2 && (
                    <>
                      <img src={team2.crest} alt={team2.name} className='w-8 h-8' />
                      <span>{team2.name}</span>
                    </>
                  )}
                </div>

                {/* Score */}
                <div className='ml-auto font-semibold'>
                  {match.player1Goals} - {match.player2Goals}
                </div>
                {!team1 || (!team2 && console.log(teamsError))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
