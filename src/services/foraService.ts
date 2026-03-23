import { runTransaction, doc, collection, serverTimestamp, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { calculateResult } from '../utils/calculateResult';
import type { ForaSubmission } from '../types/types';

export async function createFora(submission: ForaSubmission & { userId: string }) {
  const { result, player1Wins, player2Wins } = calculateResult(submission);

  const foraRef = doc(collection(db, 'foras'));

  await runTransaction(db, async (tx) => {
    tx.set(foraRef, {
      ...submission,
      result,
      player1Wins,
      player2Wins,
      createdAt: serverTimestamp(),
    });
  });

  // update global player stats
  const player1Ref = doc(db, 'players', submission.player1);
  const player2Ref = doc(db, 'players', submission.player2);

  const player1Snap = await getDoc(player1Ref);
  const player2Snap = await getDoc(player2Ref);

  const p1 = player1Snap.exists() ? player1Snap.data() : { wins: 0, losses: 0, draws: 0, totalForas: 0 };
  const p2 = player2Snap.exists() ? player2Snap.data() : { wins: 0, losses: 0, draws: 0, totalForas: 0 };

  if (result === 'player1') {
    p1.wins++;
    p1.totalForas++;
    p2.losses++;
    p2.totalForas++;
  } else if (result === 'player2') {
    p1.losses++;
    p1.totalForas++;
    p2.wins++;
    p2.totalForas++;
  } else if (result === 'draw') {
    p1.draws++;
    p1.totalForas++;
    p2.draws++;
    p2.totalForas++;
  }

  await setDoc(player1Ref, p1, { merge: true });
  await setDoc(player2Ref, p2, { merge: true });
}
