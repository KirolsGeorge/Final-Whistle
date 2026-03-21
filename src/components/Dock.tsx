import { NavLink } from 'react-router';
import type { DockProps } from '../types/types';
import { useAuth } from '../context/auth-context';

export default function Dock({ items }: DockProps) {
  const user = useAuth();

  if (!user.user) return null;

  return (
    <div
      className={`dock dock-sm dock-active pl-0 pt-0 pb-1 sticky bottom-0 z-50 mx-auto mt-auto w-full max-h-12 border border-b-0 glass rounded-t overflow-hidden pr-0 shadow-[inset_0px_3px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]`}
    >
      {items.map((items) => (
        <NavLink
          key={items.to}
          to={items.to}
          className={({ isActive }) => `flex-1 max-w-full rounded-none m-0 flex flex-col items-center justify-end ${isActive ? 'border-t-4' : ''}`}
        >
          {items.icon}
          <span className='dock-label'>{items.text}</span>
        </NavLink>
      ))}
    </div>
  );
}
