import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

const apiKey = config.requireSecret("NEXT_PUBLIC_FIREBASE_API_KEY");
const authDomain = config.requireSecret("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
const projectId = config.requireSecret("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
const storageBucket = config.requireSecret("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET");
const messagingSenderId = config.requireSecret("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID");
const appId = config.requireSecret("NEXT_PUBLIC_FIREBASE_APP_ID");
const measurementId = config.requireSecret("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
