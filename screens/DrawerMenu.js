import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const menuData = [
  { icon: "home", name: "Home", screenName: "Home", key: 1 },
  { icon: "users", name: "Sobre", screenName: "About", key: 2 },
  { icon: "calendar", name: "Calendário", screenName: "Calendar", key: 3 },
  { icon: "tasks", name: "Projetos", screenName: "Projects", key: 4 },
  { icon: "image", name: "Galeria", screenName: "Gallery", key: 5 },
  {
    icon: "phone",
    name: "Contato",
    screenName: "Contact",
    key: 6
  }
];

class DrawerMenu extends Component {

  render() {
    return (
      
      <View style={styles.container}>
         
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
    );
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    <Icon name={icon} size={22} color="white" style={{ margin: 15}} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 70,
    

  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15,
    textTransform: "uppercase",
    color: "white"

  }
});

export default DrawerMenu;