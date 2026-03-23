import MatchesForm from './MatchesForm';
import Modal from './Modal';
import { Plus } from 'lucide-react';
import type { FabProps } from '../types/types';
import { useAuth } from '../context/auth-context';
import { resetMatchesForm } from '../utils/resetForm';

export default function Fab({ open, openModal, closeModal, isSubmitting, setIsSubmitting, resetCounter }: FabProps) {
  const user = useAuth();

  return (
    <>
      {user.user && (
        <div className={`fab mb-22 z-60 fixed bottom-safe right-safe m-4 shadow shadow-white light:shadow-black rounded-full ${!user && 'hidden'}`}>
          <button
            className='btn btn-lg btn-circle glass  shadow-[inset_0px_0px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'
            onClick={() => {
              openModal();
              resetMatchesForm();
            }}
          >
            <Plus />
          </button>
        </div>
      )}
      <Modal open={open} onClose={closeModal} isSubmitting={isSubmitting}>
        <MatchesForm key={resetCounter} setIsSubmitting={setIsSubmitting} closeModal={closeModal} />
      </Modal>
    </>
  );
}
