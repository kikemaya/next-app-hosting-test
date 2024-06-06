// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKZWg8apLyb_1M0Ac777h8swdBAdGWtJo",
  authDomain: "func-test-7e79d.firebaseapp.com",
  projectId: "func-test-7e79d",
  storageBucket: "func-test-7e79d.appspot.com",
  messagingSenderId: "992185594050",
  appId: "1:992185594050:web:7ade137a3dc9991aa68b5b",
  measurementId: "G-MJ7SWV6JZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
