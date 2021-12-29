 function addUser()
 {
     user_name = document.getElementById("user_name").value;
     localStorage.setItem("user_name", user_name);
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
     });
 }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBxzV6J_r68G5TSLDnujWreAk-N7UNEhY",
  authDomain: "kwitter3-1fbe6.firebaseapp.com",
  projectId: "kwitter3-1fbe6",
  storageBucket: "kwitter3-1fbe6.appspot.com",
  messagingSenderId: "533045456909",
  appId: "1:533045456909:web:c4e4f3db4a286635c0e544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);