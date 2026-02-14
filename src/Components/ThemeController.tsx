import { Sun, Moon } from 'lucide-react';
export default function ThemeController() {
  return (
    <label className='swap swap-rotate'>
      {/* this hidden checkbox controls the state */}
      <input type='checkbox' className='theme-controller' value='light' />
      <Sun strokeWidth={2.5} size={32} color='#fff' className='swap-off' />
      <Moon strokeWidth={2.5} size={32} color='#000' className='swap-on' />
    </label>
  );
}
