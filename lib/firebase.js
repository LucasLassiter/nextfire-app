import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD6lA0slEHkUipbfnI0-0spc3f9f-AoG1A",
    authDomain: "nextfire-app-2a259.firebaseapp.com",
    projectId: "nextfire-app-2a259",
    storageBucket: "nextfire-app-2a259.appspot.com",
    messagingSenderId: "142000164976",
    appId: "1:142000164976:web:32d8bf06008a6eaf15a4b5",
    measurementId: "G-T3703M428N"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}   

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();