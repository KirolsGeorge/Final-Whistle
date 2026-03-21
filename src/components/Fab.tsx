import MatchesForm from './MatchesForm';
import Modal from './Modal';
import { Plus } from 'lucide-react';
import type { FabProps } from '../types/types';
import { useAuth } from '../context/auth-context';

export default function Fab({ open, openModal, closeModal, isSubmitting, setIsSubmitting }: FabProps) {
  const user = useAuth();

  return (
    <>
      {user.user && (
        <div className={`fab mb-22 z-60 fixed bottom-safe right-safe m-4 shadow shadow-white light:shadow-black rounded-full ${!user && 'hidden'}`}>
          <button
            className='btn btn-lg btn-circle glass  shadow-[inset_0px_0px_5px_0px_oklch(100%_0_0/var(--glass-border-opacity,20%)),0_0_0_2px_oklch(0%_0_0/5%)]'
            onClick={openModal}
          >
            <Plus />
          </button>
        </div>
      )}
      <Modal open={open} onClose={closeModal} isSubmitting={isSubmitting}>
        <MatchesForm setIsSubmitting={setIsSubmitting} closeModal={closeModal} />
      </Modal>
    </>
  );
}
