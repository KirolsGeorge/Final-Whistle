import { Link } from 'react-router';

import type { DockItemTypes } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DockItem(props: DockItemTypes) {
  return (
    <Link className='transition-all duration-500' to={props.destination}>
      <FontAwesomeIcon icon={props.icon} className='text-xl' />
      <span className='dock-label text-lg'>{props.text}</span>
    </Link>
  );
}
