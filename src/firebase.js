import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAB2mpzMx_wgINfotpuQ6cYQzynslLVgcM",
  authDomain: "grace-shopper-6d1e0.firebaseapp.com",
  projectId: "grace-shopper-6d1e0",
  storageBucket: "grace-shopper-6d1e0.appspot.com",
  messagingSenderId: "936617246771",
  appId: "1:936617246771:web:e2cf54be5463b51c87a346",
  measurementId: "G-YWE2VEVBXZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//intitialize the database
const db = firebaseApp.firestore();
//variable to handle login
const auth = firebase.auth();

export { db, auth };
