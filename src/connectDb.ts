import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import credentials from "../credentials.json"

export const connectDb = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials as any),
    });
  }
  return getFirestore()
};
