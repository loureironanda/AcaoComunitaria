import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Text } from "react-native";

export default class Home extends Component {

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
            <Title> Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Text>tste</Text>
        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0d62ad"
  }

});
