// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import * as firebase from "firebase/app";
import "firebase/auth";

// Your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnC30u16txdNl5ajqp-1A0_VSE6Xh18B8",
  authDomain: "employee-crud-c5469.firebaseapp.com",
  projectId: "employee-crud-c5469",
  storageBucket: "employee-crud-c5469.appspot.com",
  messagingSenderId: "968746129153",
  appId: "1:968746129153:web:8ccf000373b5678383ad00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;