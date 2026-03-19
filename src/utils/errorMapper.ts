type FirebaseErrorProps = {
  code?: string;
  message?: string;
};

const errorMap: Record<string, string> = {
  // Auth
  'auth/email-already-in-use': 'Email already registered.',
  'auth/invalid-email': 'Invalid email.',
  'auth/user-not-found': 'User not found.',
  'auth/wrong-password': 'Wrong password.',

  // Firestore
  'permission-denied': 'You don’t have permission.',
  'not-found': 'Data not found.',
  'already-exists': 'Already exists.',
  unavailable: 'Network issue. Try again.',
};

export function getErrorMessage(error?: FirebaseErrorProps, fallback?: string) {
  if (!error) return fallback || 'Something went wrong.';

  return errorMap[error.code || ''] || error.message || fallback || 'Something went wrong.';
}
