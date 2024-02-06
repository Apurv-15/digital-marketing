
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB50y2N9V8H1Gob13Fl58Yww4fTZeefkHo",
  authDomain: "digital-marketing-firebase.firebaseapp.com",
  projectId: "digital-marketing-firebase",
  storageBucket: "digital-marketing-firebase.appspot.com",
  messagingSenderId: "984515596375",
  appId: "1:984515596375:web:208999781e453400471312"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth,
}