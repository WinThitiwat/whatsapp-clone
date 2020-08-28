import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOycBw-nyZgt0Ese9uho_-Zgk5-rDDY90",
    authDomain: "whatsapp-clone-b6b1a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b6b1a.firebaseio.com",
    projectId: "whatsapp-clone-b6b1a",
    storageBucket: "whatsapp-clone-b6b1a.appspot.com",
    messagingSenderId: "1007075267278",
    appId: "1:1007075267278:web:02654c41d70830f4c0b69f"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;