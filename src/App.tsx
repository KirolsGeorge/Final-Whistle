import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Fab from './components/Fab';
import Dock from './components/Dock';
import useModal from './hooks/useModal';
import { useNavigation } from 'react-router';
import { useState } from 'react';
import { Trophy, History } from 'lucide-react';

function App() {
  const modal = useModal();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [page, setPage] = useState<string>('Rank');

  const items = [
    {
      icon: <Trophy size={18} />,
      text: 'Rank',
      to: '/',
    },
    {
      icon: <History size={18} />,
      text: 'Recent',
      to: '/recent-matches',
    },
  ];

  return (
    <main className='relative size-full flex flex-col'>
      <div className='absolute top-0 left-0 size-full bg-white/9 light:bg-white/20 blur-[120px] pointer-events-none' />
      <Header />
      <Outlet />
      <Fab open={modal.open} openModal={modal.openModal} closeModal={modal.closeModal} isSubmitting={isSubmitting} />
      <Dock page={page} setPage={setPage} items={items} />
    </main>
  );
}

export default App;
