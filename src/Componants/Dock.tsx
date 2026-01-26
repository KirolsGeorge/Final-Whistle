import { faRankingStar, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import DockItem from '../Componants/dockItem';


export default function Dock() {
  return (
    <div
      className='dock dock-md dock-active rounded-t-xl
      absolute bottom-0 z-50 mx-auto w-full max-w-7xl border border-b-0
      
      bg-white/1 backdrop-blur-2xl border-white/5
      shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)]

      light:bg-white/40 light:border-white/60 light:backdrop-blur-xl
      light:hadow-[0_8px_32px_rgba(0,0,0,0.06)]'
    >

      <DockItem icon={faRankingStar} text='Rank' destination={'/'} />
      <DockItem icon={faClockRotateLeft} text='Recent' destination={'/recent-matches'} />
    </div>
  );
}
