import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmJiTQqAikOgiR_COLkOBjSp24vDxzIL0",
  authDomain: "ai-board-clone.firebaseapp.com",
  projectId: "ai-board-clone",
  storageBucket: "ai-board-clone.firebasestorage.app",
  messagingSenderId: "1080737949710",
  appId: "1:1080737949710:web:11a599847b8be9f497745f",
  measurementId: "G-E9S3LPCWTQ",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
