import { useFootballAPI } from '../hooks/useFootballAPI';
import { useForas } from '../hooks/useForas';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Foras from '../components/Foras';
import useModal from '../hooks/useModal';

export default function RecentPage() {
  const { foras, loading: forasLoading } = useForas();
  const { data: teams } = useFootballAPI();
  const { open, openModal, closeModal } = useModal();

  return (
    <div className='p-2 flex flex-col gap-3 flex-1 size-full max-w-7xl overflow-auto'>
      <h1 className='font-bold'>Recent Foras</h1>
      {!forasLoading && <Foras foras={foras} teams={teams} open={open} closeModal={closeModal} openModal={openModal} />}
      {forasLoading && <LoadingSkeleton skeletonType={'loadingForas'} />}
    </div>
  );
}
