import React, {Component} from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Calendar from "./screens/Calendar";
import Gallery from "./screens/Gallery";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Contact from "./screens/Contact";
import DrawerMenu from "./screens/DrawerMenu";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const DrawerNavigation = createDrawerNavigator(
  {
    Home: Home,
    About: About,
    Projects: Projects,
    Calendar: Calendar,
    Gallery: Gallery, 
    Login: Login,
    Cadastro: Cadastro,
    Contact: Contact
  },
  {
    initialRouteName: "Home",
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

