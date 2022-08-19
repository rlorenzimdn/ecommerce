// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzqVKWYUhDVgmbke8rbyF6DC3Y09hCObg",
  authDomain: "ecommerce-5f7f2.firebaseapp.com",
  projectId: "ecommerce-5f7f2",
  storageBucket: "ecommerce-5f7f2.appspot.com",
  messagingSenderId: "494143317596",
  appId: "1:494143317596:web:b77a518b84aa59ce9ee899",
  measurementId: "G-56MDSXD72M",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db

