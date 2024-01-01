import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // apiKey: "AIzaSyAPnTFS7ri5F6ucpy0nnRcEDoXCt-QTaag",
  // authDomain: "blog-app-a7f98.firebaseapp.com",
  // projectId: "blog-app-a7f98",
  // storageBucket: "blog-app-a7f98.appspot.com",
  // messagingSenderId: "506088894461",
  // appId: "1:506088894461:web:6b56a7de1e0b795414f394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
