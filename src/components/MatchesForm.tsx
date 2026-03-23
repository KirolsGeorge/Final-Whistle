import { useForaConfig } from '../features/fora/hooks/useForaConfig';
import { Settings } from 'lucide-react';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { useFootballAPI } from '../hooks/useFootballAPI';
import PlayersSection from './PlayersSection';
import MatchCard from './MatchCard';
import { createFora } from '../services/foraService';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../context/auth-context';

type MatchesFormProps = {
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
};

export default function MatchesForm({ setIsSubmitting, closeModal }: MatchesFormProps) {
  const [config, dispatch] = useForaConfig();
  const { data: teams, isLoading, error } = useFootballAPI();
  const [matches, setMatches] = useState<any[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    if (error) {
      showToast('error', error.message);
    }

    if (!config.matchesCount || !config.teamsPerMatch) return;

    setMatches(
      Array.from({ length: config.matchesCount }, () => ({
        teams: Array.from({ length: config.teamsPerMatch! }, () => ({
          team: '',
          goals: 0,
        })),
      }))
    );
  }, [config.matchesCount, config.teamsPerMatch]);

  const { user } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      showToast('error', 'Please login first');
      return;
    }
    setIsSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const player1 = data.player1.toString().trim().toLocaleLowerCase();
    const player2 = data.player2.toString().trim().toLocaleLowerCase();

    await createFora({
      userId: user.uid,
      gameId: '2852001.Games',
      secret: '2852001.Games',
      player1,
      player2,
      matches: matches.map((match) => {
        return {
          player1Team: match.teams[0].team,
          player2Team: match.teams[1].team,
          player1Goals: match.teams[0].goals,
          player2Goals: match.teams[1].goals,
          matchWinner: match.teams[0].goals > match.teams[1].goals ? player1 : match.teams[0].goals < match.teams[1].goals ? player2 : 'draw',
        };
      }),
    });
    closeModal();
    showToast('success', 'Fora added successfully');
  };

  return (
    <form className='rounded flex flex-col gap-3' onSubmit={handleSubmit} id='matches-form'>
      <div className='flex items-center justify-end relative'>
        <button
          type='button'
          className='btn btn-ghost btn-circle border-white/20 light:border-black/20'
          popovertarget='setting'
          style={{ anchorName: '--anchor-1' } as React.CSSProperties}
        >
          <Settings />
        </button>

        <ul
          className='dropdown w-52 backdrop-blur-2xl rounded-xl top-1 p-1 px-2 cursor-pointer -left-45 border border-white/20 light:border-black/20'
          popover=''
          id='setting'
          style={{ positionAnchor: '--anchor-1' } as React.CSSProperties}
        >
          <li>
            <fieldset className='fieldset flex-1'>
              <label className='title'>Matches Number</label>

              <select
                required
                defaultValue='Pick a number'
                className='select rounded-xl'
                onChange={(e) =>
                  dispatch({
                    type: 'SET_MATCHES',
                    payload: Number(e.target.value),
                  })
                }
              >
                <option disabled>Pick a number</option>
                <option value={3}>3 (Default)</option>
                <option value={5}>5</option>
                <option value={7}>7</option>
              </select>
            </fieldset>
          </li>
        </ul>
      </div>

      <div className='mb-1'>Players:</div>

      <PlayersSection config={config} />

      <div className='flex flex-col gap-2'>
        {matches.map((match, matchIndex) => (
          <MatchCard key={matchIndex} match={match} matchIndex={matchIndex} teams={teams} isLoading={isLoading} setMatches={setMatches} />
        ))}
      </div>
    </form>
  );
}
