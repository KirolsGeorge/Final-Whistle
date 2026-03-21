import { createContext } from 'react';
import type { ToastType } from '../types/types';

type ToastContextType = {
  showToast: (type: ToastType, message: any) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
