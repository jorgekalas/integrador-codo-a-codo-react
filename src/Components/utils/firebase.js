import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {

  //bd completa
    apiKey: "AIzaSyC3FjYQc77ZNfkUUW6LboKvvjy7qFxjH3o",
    authDomain: "react-codo-a-codo.firebaseapp.com",
    projectId: "react-codo-a-codo",
    storageBucket: "react-codo-a-codo.appspot.com",
    messagingSenderId: "532334662187",
    appId: "1:532334662187:web:649178fbb0cb59f2e4106e",
    measurementId: "G-P8X6PHDBYP"

  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);