import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, SafeAreaView, Text, ScrollView } from "react-native";
export default class Gallery extends Component {
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" }
    ]
  };
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button style={styles.header} onPress={() => this.props.navigation.openDrawer()} title="Toggle Drawer">
              <Ionicons name="md-menu" size={32} color="white"/>
            </Button>
          </Left>
          <Body>
            <Title> Galeria</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.id}
              numColumns={2} 
              renderItem={({ item }) => {
                return (
                  <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                );
              }}
            />
            </ScrollView>
          </SafeAreaView>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0d62ad"
  },

  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    flexBasis: 0,
    margin: 4,
    padding: 20
  },

  text: {
    color: "#333333"
  },

  container: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20
  }

});