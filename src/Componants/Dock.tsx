import { faRankingStar, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router';

import type { DockItemTypes } from '../types/dockItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dock() {
  const [page, setPage] = useState<string>('Rank');

  function DockItem(props: DockItemTypes) {
    return (
      <Link to={props.destination} onClick={props.onClick} className={`flex-1 max-w-full rounded-none ${props.className}`}>
        <FontAwesomeIcon icon={props.icon} />
        <span className='dock-label'>{props.text}</span>
      </Link>
    );
  }

  return (
    <div
      className='dock dock-sm dock-active pl-0 pt-0.5
      sticky bottom-0 z-50 mx-auto mt-auto w-full border border-b-0
      
      bg-white/1 backdrop-blur-2xl border-white/5
      shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)]

      light:bg-white/40 light:border-white/60 light:backdrop-blur-xl
      light:hadow-[0_8px_32px_rgba(0,0,0,0.06)]'
    >
      <DockItem icon={faRankingStar} text='Rank' destination={'/'} className={page === 'Rank' ? 'border-t-4' : ''} onClick={() => setPage('Rank')} />
      <DockItem
        icon={faClockRotateLeft}
        text='Recent'
        destination={'/recent-matches'}
        className={page === 'Recent' ? 'border-t-4' : ''}
        onClick={() => setPage('Recent')}
      />
    </div>
  );
}
