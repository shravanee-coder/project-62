 import  firebase from "firebase";

//initialize your database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLeMWKoPvZy0QLWXGGjBXK8wP9DFvx_E",
  authDomain: "project-60-5b920.firebaseapp.com",
  databaseURL: "https://project-60-5b920-default-rtdb.firebaseio.com",
  projectId: "project-60-5b920",
  storageBucket: "project-60-5b920.appspot.com",
  messagingSenderId: "158717150482",
  appId: "1:158717150482:web:a48207d103780771751fcb",
  measurementId: "G-HFRDCRBFP4"
};

firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  