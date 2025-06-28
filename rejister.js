 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrHUsRjN4oFhJl5eCyXOF-E14gm0zK5vM",
  authDomain: "sudo-sport-team.firebaseapp.com",
  projectId: "sudo-sport-team",
  storageBucket: "sudo-sport-team.firebasestorage.app",
  messagingSenderId: "735140665689",
  appId: "1:735140665689:web:686a078e4f77f78cf5d448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

//input 
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
// Button
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
    event.preventDefault()
    alert(5)
});
