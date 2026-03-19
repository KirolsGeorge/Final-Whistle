// import { signInWithPopup, type AuthProvider } from 'firebase/auth';
// import { db, auth } from '../lib/firebase';

// export function useFirestore() {
//   // Sign in with provider Logic
//   async function signInWithProvider(provider: AuthProvider, loaderId: string): Promise<void> {
//     const timeoutDuration = 20000;
//     let responded = false,
//       timeout = false;

//     // loadingSpinner(loaderId, true);

//     const timeoutTimer = setTimeout(() => {
//       if (!responded) {
//         timeout = true;
//         // loadingSpinner(loaderId, false);
//         // handleToast('error', undefined, 'Login timed out. Did not receive user action.');
//       }
//     }, timeoutDuration);
//     try {
//       const result = await signInWithPopup(auth, provider);
//       responded = true;
//       clearTimeout(timeoutTimer);

//       if (timeout) return;

//       addNewUser(collectDataFromProvider(result));
//     //   loadingSpinner(loaderId, false);
//     //   redirectToHome();
//     //   handleToast('success', undefined, 'Login Successful');
//     } catch (err: any) {
//     //   loadingSpinner(loaderId, false);
//     //   handleToast('error', err.code, err.message);
//     //   console.error(err);
//     }
//   }

//   // Register with Email/Password
//   //   export async function registerWithEmail(email: string, password: string, userName: string) {
//   //     try {
//   //       if (email.trim() === '' || password.trim() === '' || userName.trim() === '') {
//   //         throw new Error('Please Fill all fields');
//   //       } else {
//   //         loadingSpinner('register-loader', true);
//   //         await createUserWithEmailAndPassword(auth, email, password);
//   //         loadingSpinner('register-loader', false);
//   //         addNewUser(
//   //           collectDataFromEmailAndPassword({
//   //             uid: auth.currentUser?.uid,
//   //             email: auth.currentUser?.email,
//   //             displayName: userName,
//   //             providerId: 'Email & Password',
//   //           })
//   //         );
//   //         redirectToHome();
//   //         resetEntries();
//   //         handleToast('success', undefined, 'Register Successful');
//   //       }
//   //     } catch (err: any) {
//   //       loadingSpinner('register-loader', false);
//   //       handleToast('error', err.code, err.message);
//   //       console.error(err);
//   //     }
//   //   }

//   //   // Login with Email/Password
//   //   export async function loginWithEmail(email: string, password: string) {
//   //     try {
//   //       loadingSpinner('email-loader', true);
//   //       if (email.trim() === '' && password.trim() === '') throw new Error('Please Fill all fields');
//   //       loadingSpinner('email-loader', false);
//   //       if (!(await signInWithEmailAndPassword(auth, email, password))) throw new Error();
//   //       handleToast('success', undefined, 'Login Successful');
//   //       redirectToHome();
//   //       resetEntries();
//   //     } catch (err: any) {
//   //       loadingSpinner('email-loader', false);
//   //       handleToast('error', err.code, err.message);
//   //     }
//   //   }

//   // Logout
//   //   export async function logout() {
//   //     const newLogoutBtn = logoutBtn?.cloneNode(true) as HTMLButtonElement;
//   //     logoutBtn?.replaceWith(newLogoutBtn);
//   //     newLogoutBtn?.addEventListener('click', () => {
//   //       signOut(auth);
//   //       redirectToLogin();
//   //       handleToast('success', undefined, 'Logout Successful');
//   //     });
//   //   }

//   //   // Auth Guard (run on protected.html)
//   //   export function requireAuth() {
//   //     onAuthStateChanged(auth, (user) => {
//   //       if (!user) {
//   //         redirectToLogin();
//   //       } else {
//   //         redirectToHome();
//   //       }
//   //     });
//   //     }

//   return {
//     signInWithProvider,
//   };
// }
