import { createContext } from 'react';
import type { ToastType } from '../types/types';

type ToastContextType = {
  showToast: (type: ToastType, message: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
