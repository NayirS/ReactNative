import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_nvdxRYMeCh_qFDVzKq6x1kB_U_JPCH0",
  authDomain: "react-nativetp-9e5cc.firebaseapp.com",
  projectId: "react-nativetp-9e5cc",
  storageBucket: "react-nativetp-9e5cc.appspot.com",
  messagingSenderId: "461340427549",
  appId: "1:461340427549:web:bf53389347f329ab048df4",
  measurementId: "G-HRB6KK745X"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
