import { useFootballAPI } from '../hooks/useFootballAPI';

export default function TeamsList() {
  const { data: teams, isLoading, error } = useFootballAPI();

  return (
    <div>
      <button className='btn rounded-sm' popoverTarget='popover-1' style={{ anchorName: '--anchor-1' } /* as React.CSSProperties */}>
        Choose Team
      </button>
      <ul
        className='dropdown menu w-52 rounded-box bg-base-100 shadow-sm p-2'
        popover='auto'
        id='popover-1'
        style={{ positionAnchor: '--anchor-1' }}
      >
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
