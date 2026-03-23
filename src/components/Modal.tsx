import { createPortal } from 'react-dom';
import { modelLogic } from '../utils/modal-logic';
import { resetMatchesForm } from '../utils/resetForm';

export type modalProperties = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  justView?: boolean;
  isSubmitting?: boolean;
};

export default function Modal({ open, onClose, children, justView = false, isSubmitting }: modalProperties) {
  const modelRef = modelLogic(open);

  return createPortal(
    <dialog className='modal rounded' ref={modelRef}>
      <div className='modal-box backdrop-blur-xs bg-black/40 light:bg-white/70 rounded-xl max-h-6/7 p-4 border border-white/20 light:border-black/20'>
        {children}
        <div className='modal-action'>
          {!justView && !isSubmitting && <input form='matches-form' type='submit' value='Save' className='btn rounded border-white/20 light:border-black/20' />}
          {!justView && isSubmitting && (
            <button className='btn rounded border border-base-300' disabled>
              <span className='loading loading-spinner'></span>
              Saving...
            </button>
          )}
          <button
            type='button'
            className='btn bg-red-600 border-red-600 rounded'
            onClick={() => {
              onClose();
              resetMatchesForm();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
