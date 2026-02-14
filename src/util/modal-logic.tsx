import { useRef, useEffect } from 'react';

export function modelLogic(open: boolean) {
  const modelRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modelRef.current?.showModal();
    } else {
      modelRef.current?.close();
    }
  }, [open]);

  return modelRef;
}
