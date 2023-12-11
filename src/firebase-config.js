import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCStDXiyENCLooCcE8vmn1NNDEtK47J6R4",
  authDomain: "silyoung-recipe.firebaseapp.com",
  projectId: "silyoung-recipe",
  storageBucket: "silyoung-recipe.appspot.com",
  messagingSenderId: "216737628993",
  appId: "1:216737628993:web:3767abadbdef9fde3e57c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }