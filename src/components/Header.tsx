import ThemeController from './ThemeController';

export default function Header() {
  return (
    <header className='rounded-b-xl p-2 flex items-center sticky top-0 mx-auto w-full max-w-7xl border border-t-0 glass shadow-[inset_0px_-3px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'>
      <ThemeController />
      <h1 className='flex-1 text-center text-3xl'>Final Whistle</h1>
    </header>
  );
}
