
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC1NbIPQmOfIyTjv3u1zHXNk0DSSyldd9c",
  authDomain: "xozir-67c93.firebaseapp.com",
  projectId: "xozir-67c93",
  storageBucket: "xozir-67c93.appspot.com",
  messagingSenderId: "106439208179",
  appId: "1:106439208179:web:f9215fba008e74a65c5b86"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app