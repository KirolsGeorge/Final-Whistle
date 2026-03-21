import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeController() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'black';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'black';

  return (
    <label className='swap swap-rotate pl-4'>
      <input type='checkbox' checked={isDark} onChange={() => setTheme((prev) => (prev === 'light' ? 'black' : 'light'))} />
      <Sun strokeWidth={2} size={32} className='text-white swap-on' />
      <Moon strokeWidth={2} size={32} className='text-black swap-off' />
    </label>
  );
}
