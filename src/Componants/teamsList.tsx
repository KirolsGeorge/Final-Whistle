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
    <div className='dropdown'>
      <div tabIndex={0} role='button' className='btn m-1' ref={dropDownRef}>
        Choose Team
      </div>
      <ul tabIndex={-1} className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
        {error && <li>{error.message}</li>}
        {!isLoading &&
          teams?.map((team) => (
            <li key={team.name} className='w-full'>
              <button className='flex items-center gap-2 p-2 cursor-pointer w-full overflow-hidden' onClick={() => chooseHandel(team.name)}>
                <img src={team.crest} alt={team.name} className='w-8 h-8 shrink-0 bg-white rounded-2xl p-0.5' />
                <span className='truncate'>{team.name}</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
