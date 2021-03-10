import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCWcugKXjsrdQH40DpCd5cRHzPAKKAaEVc",
    authDomain: "first-react-native-app-slk.firebaseapp.com",
    projectId: "first-react-native-app-slk",
    storageBucket: "first-react-native-app-slk.appspot.com",
    messagingSenderId: "56653334908",
    appId: "1:56653334908:web:ba7447e29a5a0f8049fcf9"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);