import React, {Component} from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Calendar from "./screens/Calendar";
import Gallery from "./screens/Gallery";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Contact from "./screens/Contact";
import Volunteer from "./screens/Volunteer";
import QuadroAvisos from "./screens/QuadroAvisos";
import DrawerMenu from "./screens/DrawerMenu";
import Sair from "./screens/Sair";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAix1ncxMrO7Rz24GYy1i7H6getKkpRdv8",
  authDomain: "appacaocomunitaria.firebaseapp.com",
  databaseURL: "https://appacaocomunitaria.firebaseio.com",
  projectId: "appacaocomunitaria",
  storageBucket: "appacaocomunitaria.appspot.com",
  messagingSenderId: "1064292544219",
  appId: "1:1064292544219:web:1f27d784a6c636e430e6fe"
};

//firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const DrawerNavigation = createDrawerNavigator(

  {
    "Home": { screen: Home},
    "About": { screen: About},
    "Projects": { screen: Projects},
    "Calendar": { screen: Calendar},
    "Gallery": { screen: Gallery}, 
    "Login": { screen: Login, 
      navigationOptions: {
        drawerLockMode: 'locked-closed'
      }
    }, 
    "Cadastro": { screen: Cadastro,
      navigationOptions: {
        drawerLockMode: 'locked-closed'
      }
    },
    "Volunteer": { screen: Volunteer},
    "QuadroAvisos": { screen: QuadroAvisos},
    "Contact": { screen: Contact},
    "Sair": { screen: Sair}
  },

  {
    initialRouteName: "Login",
    headerMode: "none",
    drawerBackgroundColor: "#0d62ad",
    contentOptions: {
      activeTintColor: "white"
    },
    
    contentComponent: DrawerMenu
  }
);

const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
    
  })
);

export default class App extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

  }

  render() {
    return <Router />;

  }
}
