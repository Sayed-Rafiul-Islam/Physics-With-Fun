// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYjby1Ot32NNh9NRRGNenQfONHVxIal9w",
    authDomain: "assignment-10-a4aed.firebaseapp.com",
    projectId: "assignment-10-a4aed",
    storageBucket: "assignment-10-a4aed.appspot.com",
    messagingSenderId: "776850731002",
    appId: "1:776850731002:web:dcb1fbf510c6b09ca63e43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;