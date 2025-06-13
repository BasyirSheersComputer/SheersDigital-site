// firebase.config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6eWlMRU1SiBB67BEjFcwzzlI39R1G_LU",
  authDomain: "sheers-website-2025.firebaseapp.com",
  projectId: "sheers-website-2025",
  storageBucket: "sheers-website-2025.firebasestorage.app",
  messagingSenderId: "757424985699",
  appId: "1:757424985699:web:373bafb2a61c089b184a56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
