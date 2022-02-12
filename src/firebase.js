import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyC2vO5c2uggcjOY7vw6le8WXmiagNybFTI",
    authDomain: "linkedin-acc15.firebaseapp.com",
    projectId: "linkedin-acc15",
    storageBucket: "linkedin-acc15.appspot.com",
    messagingSenderId: "618528592903",
    appId: "1:618528592903:web:4bfb9ca70a864eaebfc6a2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export {auth, provider,storage};
  export default db;