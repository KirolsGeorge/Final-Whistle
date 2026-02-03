import MatchesForm from './MatchesForm';
import Modal from './UI/model/modal';
import useModal from './UI/model/useModal';

export default function FAB() {
  const modal = useModal();

  return (
    <>
      <div className='fab mb-22 z-60 fixed bottom-safe right-safe m-4'>
        <button
          className='btn btn-lg btn-circle glass  shadow-[inset_0px_0px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'
          onClick={modal.openModel}
        >
          <svg aria-label='New' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='size-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </div>
      <Modal open={modal.open} onClose={modal.closeModel} justView={false}>
        <MatchesForm />
      </Modal>
    </>
  );
}
