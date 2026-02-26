import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ForaSubmission } from '../types/types';

export function useForas() {
  const [foras, setForas] = useState<ForaSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



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
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { foras, loading, error };
}
