import { credential, ServiceAccount } from "firebase-admin";
import { App, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let adminApp: App;

// Check if Firebase app is already initialized, otherwise initialize
if (!getApps().length) {
  adminApp = initializeApp({
    credential: credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
} else {
  adminApp = getApp();
}

// Get Firestore instance
const adminDb = getFirestore(adminApp);

export { adminApp, adminDb };
