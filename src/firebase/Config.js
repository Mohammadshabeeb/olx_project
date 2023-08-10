import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyAf3v_p2egk9MDKb0CPMx5Gp8WMOw0OS7w",
    authDomain: "olxnew-27b25.firebaseapp.com",
    projectId: "olxnew-27b25",
    storageBucket: "olxnew-27b25.appspot.com",
    messagingSenderId: "922361584472",
    appId: "1:922361584472:web:e17d774c307c7e3d48e32d",
    measurementId: "G-PJF2KPE08S"
};

const firebase = Firebase.initializeApp(config);

export {firebase};
