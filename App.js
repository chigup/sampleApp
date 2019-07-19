import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import homeScreen from './screens/homeScreen';
import loadingScreen from './screens/loadingScreen';
import signUp from './screens/signUp';
import signIn from './screens/signIn';
import dataList from './screens/dataList';

var firebaseConfig = {
  apiKey: "AIzaSyDJlXRiANJs2jVC4OZp-duXa6bXw1FC42o",
  authDomain: "sampleapp-89ffb.firebaseapp.com",
  databaseURL: "https://sampleapp-89ffb.firebaseio.com",
  projectId: "sampleapp-89ffb",
  storageBucket: "",
  messagingSenderId: "938416428682",
  appId: "1:938416428682:web:b344ac7dd3a87ef6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const MainNav = createStackNavigator(


  {
    homeScreen:{screen:homeScreen},
    loadingScreen:{screen:loadingScreen},
    signInScreen:{screen:signIn},
    signUpScreen:{screen:signUp},
    dataList:{screen:dataList}
  },
  {
    //launcher
    initialRouteName:"loadingScreen"
  }
  
  
  
  )
  
  const App = createAppContainer(MainNav)
  export default App;
