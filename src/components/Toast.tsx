import type { ToastType } from '../types/types';

const TypeClasses: Record<ToastType, string> = {
  success: 'alert-success',
  error: 'alert-error',
  info: 'alert-info',
  warning: 'alert-warning',
};

export default function Toast({ type, message }: { type: ToastType; message: string }) {
  return (
    <div className={`toast toast-top toast-end mt-14`}>
      <div className={`rounded-lg alert ${TypeClasses[type]}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}
