import { useFootballAPI } from '../../hooks/useFootballAPI';

export default function TeamsList() {
  const { data: teams, isLoading, error } = useFootballAPI();

  return (
    <div className='dropdown'>
      <div tabIndex={0} role='button' className='btn m-1'>
        Choose Team
      </div>
      <ul tabIndex={-1} className='dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm max-h-64 overflow-y-auto flex-nowrap z-50'>
        {error && <li>{error.message}</li>}
        {isLoading && <span className='skeleton skeleton-text'>loading teams....</span>}
        {!isLoading &&
          teams?.map((team) => (
            <li key={team.name} className='w-full'>
              <div className='flex items-center gap-2 p-2 cursor-pointer w-full overflow-hidden'>
                <img src={team.crest} alt={team.name} className='w-8 h-8 shrink-0 bg-white rounded-2xl p-0.5' />
                <span className='truncate'>{team.name}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
