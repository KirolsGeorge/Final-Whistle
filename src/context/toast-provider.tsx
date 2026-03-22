import { useState } from 'react';
import { ToastContext } from './toast-context';
import Toast from '../components/Toast';
import type { ToastType } from '../types/types';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ type: ToastType; message: any; visible: boolean }>({
    type: 'info',
    message: '',
    visible: false,
  });

  function showToast(type: ToastType, message: any) {
    setToast({ type, message, visible: true });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 5000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && <Toast type={toast.type} message={toast.message} />}
    </ToastContext.Provider>
  );
}
