import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLXb-VKf3Q26Xbn3Wx9-WwbN3KS_2EHwU',
  authDomain: 'crwn-clothing-db-sasha.firebaseapp.com',
  projectId: 'crwn-clothing-db-sasha',
  storageBucket: 'crwn-clothing-db-sasha.appspot.com',
  messagingSenderId: '681250616065',
  appId: '1:681250616065:web:91289202f27b0424722100',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);