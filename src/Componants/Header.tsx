import ThemeController from './UI/themeController';

export default function Header() {
  return (
    <header
      className='rounded-b-xl p-2 flex items-center
      sticky top-0 z-50 mx-auto w-full max-w-7xl border border-t-0 outline-0

      bg-white/1 backdrop-blur-2xl border-white/5
      shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]

      light:bg-white/40 light:border-white/60 light:backdrop-blur-xl
      light:shadow-[0_8px_32px_rgba(0,0,0,0.01)]

      transition-all duration-500'
    >
      <ThemeController />
      <h1 className='flex-1 text-center text-3xl'>Final Whistle</h1>
    </header>
  );
}
