import { createPortal } from 'react-dom';
import { modelLogic } from '../util/modal-logic';

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
      <div className='modal-box rounded-xl overflow-hidden max-h-6/7'>
        {children}
        <div className='modal-action'>
          {!justView && !isSubmitting && <input type='submit' value='Save' className='btn rounded' />}
          {!justView && isSubmitting && (
            <button className='btn rounded' disabled>
              <span className='loading loading-spinner'></span>
              Saving...
            </button>
          )}
          <button className='btn bg-red-600 border-red-600 rounded' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
