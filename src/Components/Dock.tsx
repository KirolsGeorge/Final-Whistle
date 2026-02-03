import { faRankingStar, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router';

import type { DockItemTypes } from '../types/dockItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dock() {
  const [page, setPage] = useState<string>('Rank');

  function DockItem(props: DockItemTypes) {
    return (
      <Link
        to={props.destination}
        onClick={props.onClick}
        className={`flex-1 max-w-full rounded-none m-0 flex flex-col items-center justify-end
       ${props.className}`}
      >
        <FontAwesomeIcon icon={props.icon} />
        <span className='dock-label'>{props.text}</span>
      </Link>
    );
  }

  return (
    <div className='dock dock-sm dock-active pl-0 pt-0 pb-2 sticky bottom-0 z-50 mx-auto mt-auto w-full max-h-12 border border-b-0 glass rounded-t overflow-hidden pr-0 shadow-[inset_0px_3px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'>
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
