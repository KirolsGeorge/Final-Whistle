import { useFootballAPI } from '../hooks/useFootballAPI';
import { useRef } from 'react';

export default function TeamsList() {
  const { data: teams, isLoading, error } = useFootballAPI();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const chooseHandel = (choosenTeam: string) => {
    console.log(choosenTeam);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className='dropdown dropdown-center'>
      <div tabIndex={0} role='button' className='btn w-full rounded' ref={dropDownRef}>
        Choose Team
      </div>
      <ul tabIndex={-1} className='dropdown-content menu bg-base-100 rounded-box z-99999 w-52 shadow-sm max-h-75 overflow-y-auto flex-nowrap overflow-visible'>
        {error && <li>{error.message}</li>}
        {isLoading && <span className='skeleton skeleton-text'>Loading Teams...</span>}
        {!isLoading &&
          teams?.map((team) => (
            <li key={team.name} className='w-full'>
              <button className='flex items-center gap-2 cursor-pointer w-full rounded overflow-hidden' onClick={() => chooseHandel(team.name)}>
                <img src={team.crest} alt={team.name} className='w-8 h-8 shrink-0 bg-white rounded-2xl p-0.5' />
                <span className='truncate'>{team.name}</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
