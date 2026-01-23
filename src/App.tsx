import './index.css';
import Header from './Componants/Header';
import Dock from './Componants/Dock';

function App() {
  return (
    <main className='relative flex-1 flex flex-col min-h-full'>
      <div className='absolute top-0 left-0 size-full bg-white/9 light:bg-white/20 blur-[120px] pointer-events-none' />
      <Header />

      <Dock />
    </main>
  );
}

export default App;
