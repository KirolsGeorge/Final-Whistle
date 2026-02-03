import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './Componants/Header';
import Dock from './Componants/Dock';
import FAB from './Componants/Fab';

function App() {
  return (
    <main className='relative size-full flex flex-col'>
      <div className='absolute top-0 left-0 size-full bg-white/9 light:bg-white/20 blur-[120px] pointer-events-none' />
      <Header />
      <Outlet />
      <FAB />
      <Dock />
    </main>
  );
}

export default App;
