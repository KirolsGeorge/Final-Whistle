import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ForaSubmission } from '../types/types';
import { useToast } from './useToast';
import { useAuth } from '../context/auth-context';

export function useForas() {
  const { user } = useAuth();
  const [foras, setForas] = useState<ForaSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    if (!user) {
      setForas([]);
      setLoading(false);
      return;
    }
    const q = query(collection(db, 'foras'), where('userId', '==', user.uid));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const forasData = snapshot.docs.map((doc) => ({
          foraId: doc.id,
          ...doc.data(),
        })) as ForaSubmission[];

        setForas(forasData);
        setLoading(false);
      },
      (err) => {
        showToast('error', err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  return { foras, loading };
}
