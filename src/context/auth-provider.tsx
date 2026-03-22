import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './auth-context';
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { useToast } from '../hooks/useToast';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(email: string, password: string) {
    const trimmedEmail = email?.trim();
    const trimmedPassword = password?.trim();

    if (!trimmedEmail || !trimmedPassword) {
      showToast('error', 'Email and password are required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      showToast('error', 'Invalid email format');
      return;
    }

    if (trimmedPassword.length < 8) {
      showToast('error', 'Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    } catch (error: any) {
      switch (error.code) {
        // Firebase auth errors
        case 'auth/user-not-found':
          showToast('error', 'No account found with this email.');
          break;
        case 'auth/wrong-password':
          showToast('error', 'Incorrect password.');
          break;
        case 'auth/too-many-requests':
          showToast('error', 'Too many failed attempts. Try again later.');
          break;
        case 'auth/invalid-email':
          showToast('error', 'The email address is not valid.');
          break;
        case 'auth/missing-email':
          showToast('error', 'Email is missing.');
          break;

        default:
          showToast('error', error.message || 'Login failed');
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  async function register(email: string, password: string) {
    const trimmedEmail = email?.trim();
    const trimmedPassword = password?.trim();

    if (!trimmedEmail || !trimmedPassword) {
      showToast('error', 'Email and password are required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      showToast('error', 'Invalid email format');
      return;
    }

    if (trimmedPassword.length < 8) {
      showToast('error', 'Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          showToast('error', 'This email is already registered.');
          break;
        case 'auth/invalid-email':
          showToast('error', 'The email address is not valid.');
          break;
        case 'auth/operation-not-allowed':
          showToast('error', 'Email/password accounts are not enabled.');
          break;
        case 'auth/weak-password':
          showToast('error', 'Password is too weak.');
          break;
        default:
          showToast('error', error.message || 'Registration failed');
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function signInWithProvider(provider: any) {
    setLoading(true);
    let responded = false,
      timeout = false;

    const timeoutTimer = setTimeout(() => {
      if (!responded) {
        timeout = true;
        showToast('error', 'Timed out. Did not receive action from user.');
        setLoading(false);
      }
    }, 30000);
    try {
      setError(null);
      const userData = await signInWithPopup(auth, provider);
      showToast('success', `Welcome ${userData.user.displayName}`);
      responded = true;
      clearTimeout(timeoutTimer);
      if (timeout) return;
      setLoading(false);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') return;
      setError(new Error(error.message));
      showToast('error', error.message);
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      setError(null);
      await signOut(auth);
      showToast('success', 'Logout successfully!');
    } catch (error: any) {
      setError(new Error(error.message));
      showToast('error', error.message);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    user,
    loading,
    error,
    login,
    register,
    signInWithProvider,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
