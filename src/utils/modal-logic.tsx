import { useRef, useEffect } from 'react';

export function modelLogic(open: boolean) {
  const modelRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = modelRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return modelRef;
}
