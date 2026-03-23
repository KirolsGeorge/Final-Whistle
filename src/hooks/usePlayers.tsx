import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { PlayerFireBase } from '../types/types';
import { useToast } from './useToast';

export function usePlayers() {
  const [players, setPlayers] = useState<PlayerFireBase[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'players'), // no userId filter
      (snapshot) => {
        const playersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as PlayerFireBase[];

        setPlayers(playersData);
        setLoading(false);
      },
      (err) => {
        showToast('error', err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { players, loading };
}
