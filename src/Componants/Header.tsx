import ThemeController from './UI/themeController';

export default function Header() {
  return (
    <header className='rounded-b-xl p-2 flex items-center sticky top-0 mx-auto w-full max-w-7xl border border-t-0 glass'>
      <ThemeController />
      <h1 className='flex-1 text-center text-3xl'>Final Whistle</h1>
    </header>
  );
}
