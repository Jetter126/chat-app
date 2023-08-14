// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxKOOxLm65nsGQAzh5EQr6ituGe0IZGA",
  authDomain: "chat-app-1c82a.firebaseapp.com",
  projectId: "chat-app-1c82a",
  storageBucket: "chat-app-1c82a.appspot.com",
  messagingSenderId: "268469574694",
  appId: "1:268469574694:web:91001a579f22cdb9109ae7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()