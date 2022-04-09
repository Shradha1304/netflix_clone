import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config={
    apiKey: "AIzaSyChKn3_dUCuP7oQGNd4L6bAKz2QpW5lUaQ",
    authDomain: "netflix-4d373.firebaseapp.com",
    projectId: "netflix-4d373",
    storageBucket: "netflix-4d373.appspot.com",
    messagingSenderId: "168620972049",
    appId: "1:168620972049:web:b2248ff29e0107153639b0"

};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};
