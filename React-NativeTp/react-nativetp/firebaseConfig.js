import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_nvdxRYMeCh_qFDVzKq6x1kB_U_JPCH0",
  authDomain: "react-nativetp-9e5cc.firebaseapp.com",
  projectId: "react-nativetp-9e5cc",
  storageBucket: "react-nativetp-9e5cc.firebasestorage.app",
  messagingSenderId: "461340427549",
  appId: "1:461340427549:web:bf53389347f329ab048df4",
  measurementId: "G-HRB6KK745X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
