import type { modalProprties } from './modal.types';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useNavigation } from 'react-router-dom';

export default function Modal({ open, onClose, children, justView }: modalProprties) {
  const modelRef = useRef<HTMLDialogElement>(null);
  const navigation = useNavigation();
  const isSubmtting = navigation.state === 'submitting';

  useEffect(() => {
    if (open) {
      modelRef.current?.showModal();
    } else {
      modelRef.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog className='modal' ref={modelRef}>
      <div className='modal-box glass rounded'>
        {children}
        <div className='modal-action'>
          {!justView && <input type='submit' value='Save' className='btn rounded' />}
          {!justView && isSubmtting && (
            <button className='btn rounded' disabled>
              <span className='loading loading-spinner'></span>
              Saving...
            </button>
          )}
          <form method='dialog'>
            <button className='btn bg-red-600 border-red-600 rounded' onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
