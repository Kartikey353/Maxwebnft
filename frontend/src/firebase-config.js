import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQlm8bPssubVHzbdLjAKM7xa2SDm3Fr1g",
  authDomain: "maxnftwebapp.firebaseapp.com",
  projectId: "maxnftwebapp",
  storageBucket: "maxnftwebapp.appspot.com",
  messagingSenderId: "48784818331",
  appId: "1:48784818331:web:4a6a3374a3211778a2463e",
  measurementId: "G-8890ZGJQ0H"
};

// Initialize Firebas;
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };