import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDX8w2uZ84fgrcgk7NOgv-5VvnUmVn9sWs",
  authDomain: "react-2-30d19.firebaseapp.com",
  projectId: "react-2-30d19",
  storageBucket: "react-2-30d19.appspot.com",
  messagingSenderId: "602539860715",
  appId: "1:602539860715:web:307666de1d1f3e3613d4ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);