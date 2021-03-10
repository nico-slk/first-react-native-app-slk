import React, { useEffect } from 'react';
import Navigation from './app/navigations/Navigations';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from 'firebase';

export default function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      console.log('WORKING')
      console.log('HARDER')
    })
  }, [])

  return <Navigation />
}
// "react-native": "https://github.com/expo/react-native/archive/sdk-40.0.1.tar.gz",