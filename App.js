import React, { useEffect } from 'react';
import Navigation from './app/navigations/Navigations';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from 'firebase';

export default function App() {

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user)
  //     console.log('WORKING')
  //     console.log('HARDER')
  //   })
  // }, [])

  { console.log('If you are watching this from you PC Browser, remember comment node_modules/react-native-easy-toaster/index.js:150 and /index.js:156 ( "style: ViewPropTypes.style," and "textStyle: Text.propTypes.style," )') }
  return <Navigation />
}