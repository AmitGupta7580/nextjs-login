import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBIqkXwKaFAabtgEHa6fMLtbNSrqDhZps",
  authDomain: "nextjs-a56a7.firebaseapp.com",
  projectId: "nextjs-a56a7",
  storageBucket: "nextjs-a56a7.appspot.com",
  messagingSenderId: "358894989149",
  appId: "1:358894989149:web:efe650d57bad420d8842b4"
};

export default function initFirebase() {
    initializeApp(firebaseConfig);
}