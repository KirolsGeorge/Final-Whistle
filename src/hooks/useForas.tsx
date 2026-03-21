import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ForaSubmission } from '../types/types';
import { useToast } from './useToast';

export function useForas() {
  const [foras, setForas] = useState<ForaSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'foras'),
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
  }, []);

  return { foras, loading };
}
