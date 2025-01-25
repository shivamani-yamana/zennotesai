import { credential, ServiceAccount } from "firebase-admin";
import { App, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceKey from "./service_key.json";

let adminApp: App;


// Check if Firebase app is already initialized, otherwise initialize
if (!getApps().length) {
  adminApp = initializeApp({
    credential: credential.cert(serviceKey as ServiceAccount),
  });
} else {
  adminApp = getApp();
}

// Get Firestore instance
const adminDb = getFirestore(adminApp);

export { adminApp, adminDb };
