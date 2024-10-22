// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPd3OJu5C4ovhseqO5Cz60GeZfjb_W-Eo",
  authDomain: "travel-website-bc25b.firebaseapp.com",
  projectId: "travel-website-bc25b",
  storageBucket: "travel-website-bc25b.appspot.com",
  messagingSenderId: "1088285659909",
  appId: "1:1088285659909:web:e8d171049c093a96db5d6c",
  measurementId: "G-GPKXCLP1P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);