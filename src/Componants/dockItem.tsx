import { Link } from 'react-router';

import type { DockItemTypes } from '../types/dockItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DockItem(props: DockItemTypes) {
  return (
    <Link to={props.destination}>
      <FontAwesomeIcon icon={props.icon} />
      <span className='dock-label'>{props.text}</span>
    </Link>
  );
}
