// import type { SingleMatch } from '../types/firebaseData';

// interface calculateForaProps {
//   matches: { player1Team: string; player2Team: string; player1Goals: string; player2Gaols: string }[];
//   player1: string;
//   player2: string;
// }

// interface calculateForaReturn {
//   matchesWithWinner: SingleMatch[];
//   foraWinner: string | null;
//   foraLoser: string | null;
// }

// function calculateFora(props: calculateForaProps): calculateForaReturn {
//   if (props.matches.length !== 5) throw Error('The matches count must be 5');
//   let player1Wins = 0;
//   let player2Wins = 0;
//   let foraWinner: string | null = null;
//   let foraLoser: string | null = null;

//   const matches = props.matches.map((match) => {
//     if (match.player1Goals > match.player2Gaols) {
//       player1Wins++;
//       return { ...match, matchWinner: props.player1 };
//     } else if (match.player1Goals < match.player2Gaols) {
//       player2Wins++;
//       return { ...match, matchWinner: props.player2 };
//     } else {
//       return { ...match, matchWinner: null };
//     }
//   });

//   if (player1Wins > player2Wins) {
//     foraWinner = props.player1;
//     foraLoser = props.player2;
//   } else if (player2Wins > player1Wins) {
//     foraWinner = props.player2;
//     foraLoser = props.player1;
//   }
//   return {
//     matchesWithWinner: matches,
//     foraWinner: foraWinner,
//     foraLoser: foraLoser,
//   };
// }
