import './index.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Fab from './components/Fab';
import Dock from './components/Dock';
import useModal from './hooks/useModal';
import { Trophy, History } from 'lucide-react';

function App() {
  const modal = useModal();
  const [selectedTeam, setSelectedTeam] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const dockItems = [
    {
      icon: <Trophy size={18} />,
      text: 'rank',
      to: '/rank',
    },
    {
      icon: <History size={18} />,
      text: 'recent',
      to: '/recent',
    },
  ];

  return (
    <main className='relative size-full flex flex-col'>
      <div className='absolute top-0 left-0 size-full bg-white/9 blur-[120px] pointer-events-none' />
      <Header />
      <Outlet context={{ selectedTeam, setSelectedTeam }} />
      <Fab open={modal.open} openModal={modal.openModal} closeModal={modal.closeModal} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} />
      <Dock items={dockItems} />
    </main>
  );
}

export default App;
