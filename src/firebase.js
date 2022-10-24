import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6dlO12gbE932rP9iWl9EpBzqxlotVQEY",
    authDomain: "note-keeper-d42e5.firebaseapp.com",
    projectId: "note-keeper-d42e5",
    storageBucket: "note-keeper-d42e5.appspot.com",
    messagingSenderId: "76484876814",
    appId: "1:76484876814:web:52d447f222e498acb8ba5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };