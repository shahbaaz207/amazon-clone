import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCacYG_J663-3Ur8F_NpTnAcjhXM1DqRUs",
    authDomain: "clone-60431.firebaseapp.com",
    databaseURL: "https://clone-60431.firebaseio.com",
    projectId: "clone-60431",
    storageBucket: "clone-60431.appspot.com",
    messagingSenderId: "846835256373",
    appId: "1:846835256373:web:252dc4503bb9dbf4a4b57c"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth()

  export {db,auth}