import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_8G_sqYtOMl3LFisD_YPzKYCZIGsxtt8',
  authDomain: 'graphiql-app-437ef.firebaseapp.com',
  projectId: 'graphiql-app-437ef',
  storageBucket: 'graphiql-app-437ef.appspot.com',
  messagingSenderId: '1089244428500',
  appId: '1:1089244428500:web:0bc46e0cf4f8a3cee1e341',
  measurementId: 'G-W26G27KGRQ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email: string, password: string): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}
