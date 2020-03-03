import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export default class Projects extends Component {

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
            <Title> Projetos</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0d62ad"
  }

});