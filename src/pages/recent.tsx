import { useFootballAPI } from '../hooks/useFootballAPI';
import { useForas } from '../hooks/useForas';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Foras from '../components/Foras';
import useModal from '../hooks/useModal';

export default function RecentPage() {
  const { foras, loading: forasLoading, error } = useForas();
  const { data: teams, isLoading: teamsLoading, error: teamsError } = useFootballAPI();
  const { open, openModal, closeModal } = useModal();

  return (
    <div className='p-2 flex flex-col gap-3 flex-1 size-full max-w-7xl overflow-scroll'>
      <h1 className='font-bold'>Recent Foras</h1>
      {!forasLoading && !teamsLoading && <Foras foras={foras} teams={teams} open={open} closeModal={closeModal} openModal={openModal} />}
      {forasLoading && <LoadingSkeleton skeletonType={'loadingForas'} />}
      {(error || teamsError) && <ErrorMessage>{error || teamsError}</ErrorMessage>}
      {(!foras || foras.length === 0) && !forasLoading && <ErrorMessage message={'No foras found!'} />}
    </div>
  );
}
