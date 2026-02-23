import { createPortal } from 'react-dom';
import { modelLogic } from '../utils/modal-logic';

export type modalProprties = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  justView?: boolean;
  isSubmitting?: boolean;
};

export default function Modal({ open, onClose, children, justView = false, isSubmitting }: modalProprties) {
  const modelRef = modelLogic(open);

  return createPortal(
    <dialog className='modal rounded' ref={modelRef}>
      <div className='modal-box rounded-xl max-h-6/7 glass p-4 border border-white/10'>
        {children}
        <div className='modal-action'>
          {!justView && !isSubmitting && <input form='matches-form' type='submit' value='Save' className='btn rounded glass' />}
          {!justView && isSubmitting && (
            <button className='btn rounded border border-base-300' disabled>
              <span className='loading loading-spinner'></span>
              Saving...
            </button>
          )}
          <button type='button' className='btn bg-red-600 border-red-600 rounded' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
