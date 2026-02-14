import { useState } from 'react';
import type { UseModelReturnProps } from '../types/types';

export default function useModal(): UseModelReturnProps {
  const [open, setOpen] = useState(false);

  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  };
}
