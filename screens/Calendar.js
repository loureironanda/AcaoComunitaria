import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content, Text} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, ScrollView, Picker } from "react-native";
export default class Calendar2 extends Component {
  state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
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
            <Title> Calendarário</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Março, 2019" value = "teste" />
               <Picker.Item label = "Abril, 2019" value = "teste" />
               <Picker.Item label = "Maio, 2019" value = "teste" />
               <Picker.Item label = "Junho, 2019" value = "teste" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
            </ScrollView>
          </SafeAreaView>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0d62ad"
  },

  container: {
    padding: 30
  }
});

