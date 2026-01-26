import { useState } from 'react';

export default function useModal() {
  const [open, setOpen] = useState(false);

  return {
    open,
    openModel: () => setOpen(true),
    closeModel: () => setOpen(false),
    toggle: () => setOpen((opened) => !opened),
  };
}
