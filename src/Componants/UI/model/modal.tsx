import type { modalProprties } from './modal.types';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, children }: modalProprties) {
  const modelRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modelRef.current?.showModal();
    } else {
      modelRef.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog className='modal' ref={modelRef}>
      <div className='modal-box'>
        {children}
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn' onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
