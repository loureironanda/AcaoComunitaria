import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content, Text} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, ScrollView, Picker, View } from "react-native";
import { Card } from 'react-native-cards';

export default class Quadro extends Component {
  state = {
    data: 0,
  }
   updateData = (data) => {
      this.setState({ data: data })
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
            <Title> Quadro de Avisos</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.picker}>
                <Picker selectedValue = {this.state.data} onValueChange = {this.updateData}>
                    <Picker.Item label = "Projeto 1" value = {0} />
                    <Picker.Item label = "Projeto 2" value = {1} />
                </Picker>
              </View>
              
            {this.state.data === 0 && 
            <View>
                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

           
            </View>
            }

            {this.state.data === 1 && 
            <View>
                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>Lorem ipsum dolor sit amet</Text>
                </Card>
            </View>
            }

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
    padding: 20
  },

  textCard: {
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 17,
    textAlign: "center"
  },

  cards: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    borderLeftWidth: 10,
    borderLeftColor: "#fcbe41",
    borderRadius: 5,
    height: 100,
    padding: 30,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    borderBottomColor: "#ddd",
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5
  },

  picker: {
    padding: 10,
    marginBottom: 30,
    marginTop: 20,
    marginLeft:5,
    marginRight:5,
    borderWidth: 1, 
    borderRadius: 5,
    borderColor: "#c7c7c7"
  }
});

