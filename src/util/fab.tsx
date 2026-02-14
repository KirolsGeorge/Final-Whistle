import MatchesForm from '../components/MatchesForm';
import Modal from '../components/Modal';
import { Plus } from 'lucide-react';
import type { UseModelReturnProps } from '../types/types';

export default function Fab({ open, openModal, closeModal, isSubmitting }: UseModelReturnProps) {
  return (
    <>
      <div className='fab mb-22 z-60 fixed bottom-safe right-safe m-4'>
        <button
          className='btn btn-lg btn-circle glass  shadow-[inset_0px_0px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'
          onClick={openModal}
        >
          <Plus />
        </button>
      </div>
      <Modal open={open} onClose={closeModal} isSubmitting={isSubmitting}>
        <MatchesForm />
      </Modal>
    </>
  );
}
