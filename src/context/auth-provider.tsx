import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './auth-context';
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(new Error(error.message));
    } finally {
      setLoading(false);
    }
  }

  async function register(email: string, password: string) {
    try {
      setLoading(true);
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(new Error(error.message));
    } finally {
      setLoading(false);
    }
  }

  async function signInWithProvider(provider: any) {
    try {
      setLoading(true);
      setError(null);

      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError(new Error('Login cancelled'));
      } else {
        setError(new Error('Something went wrong'));
      }
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      setError(null);
      await signOut(auth);
    } catch (error: any) {
      setError(new Error(error.message));
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
