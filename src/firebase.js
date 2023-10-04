import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_9bpGqFBLYzgGEWJNcjcOt_GmBBNpxrE",
  authDomain: "chat-app-80423.firebaseapp.com",
  projectId: "chat-app-80423",
  storageBucket: "chat-app-80423.appspot.com",
  messagingSenderId: "4999142345",
  appId: "1:4999142345:web:9acb51acc94ebaccfea618",
  measurementId: "G-N3PRPPLR29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
