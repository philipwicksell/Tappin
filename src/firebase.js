
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXe9H-Dbn5jtSrBSyoAG5TjN7ADeX5yp0",
  authDomain: "tappin-200304.firebaseapp.com",
  projectId: "tappin-200304",
  storageBucket: "tappin-200304.firebasestorage.app",
  messagingSenderId: "116633847737",
  appId: "1:116633847737:web:635dec82a6b2f0b8399868",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
