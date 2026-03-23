import { useState } from 'react';
import type { UseModelReturnProps } from '../types/types';

export default function useModal(): UseModelReturnProps {
  const [open, setOpen] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  return {
    open,
    openModal: () => {
      setResetCounter((prev) => prev + 1);
      setOpen(true);
    },
    closeModal: () => setOpen(false),
    resetCounter,
  };
}
