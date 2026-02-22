import './index.css';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router';
import { useState } from 'react';
import Header from './components/Header';
import Fab from './components/Fab';
import Dock from './components/Dock';
import useModal from './hooks/useModal';
import { Trophy, History, Settings } from 'lucide-react';

function App() {
  const modal = useModal();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [page, setPage] = useState<string>('Rank');
  const [selectedTeam, setSelectedTeam] = useState<string>();

  const dockItems = [
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
      <div className='absolute top-0 left-0 size-full bg-white/9 blur-[120px] pointer-events-none' />
      <Header />
      <button className='btn btn-ghost btn-circle' popovertarget='popover-1' style={{ anchorName: '--anchor-1' } as React.CSSProperties}>
        <Settings />
      </button>
      <ul className='dropdown menu w-52 rounded-box bg-base-100 shadow-sm' popover='auto' id='popover-1' style={{ positionAnchor: '--anchor-1' } as React.CSSProperties}>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
      <Outlet context={{ selectedTeam, setSelectedTeam }} />
      <Fab open={modal.open} openModal={modal.openModal} closeModal={modal.closeModal} isSubmitting={isSubmitting} />
      <Dock page={page} setPage={setPage} items={dockItems} />
    </main>
  );
}

export default App;
