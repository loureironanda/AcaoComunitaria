import React, { Component } from 'react';
import { Container, Header, Title, Left, Right, Body, Content, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import { Card } from 'react-native-cards';

export default class About extends Component {

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button style={styles.header} onPress={() => this.props.navigation.openDrawer()} title="">
              <Ionicons name="md-menu" size={32} color="white"/>
            </Button>
          </Left>
          <Body>
            <Title> Sobre</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

              <Text style={styles.textoabout}>
                  A Ação Comunitária tem como missão fortalecer a identidade e o 
                  carisma lassalistas, para que em tudo estejam presentes os princípios de 
                  FÉ, FRATERNIDADE E SERVIÇO:
              </Text>

                <Card style={styles.cards}>
                  <Text style={styles.titleCard}>FÉ</Text>
                  <Text style={styles.textCard}>Fé ao enxergarmos Deus vivo em cada irmão.</Text>
                </Card>

                <Card style={styles.cards2}>
                  <Text style={styles.titleCard}>FRATERNIDADE</Text>
                  <Text style={styles.textCard}>Fraternidade quando vivenciamos a partilha e a presença em comunidade, que somos. </Text>
                </Card>

                <Card style={styles.cards3}>
                  <Text style={styles.titleCard}>SERVIÇO</Text>
                  <Text style={styles.textCard}>Serviço quando colocamos em prática todos os nossos planos e sonhos, tentando juntos.</Text>
                </Card>
            </ScrollView>
          </SafeAreaView>
          
        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    marginHorizontal: 20,
  },

  textoabout: {
    textAlign: "justify",
    padding: 6,
    fontSize: 15,
    lineHeight: 23
  },
  cards: {
    marginTop: 30,
    backgroundColor:'white',
    borderLeftWidth: 10,
    borderLeftColor: "#fcbe41",
    borderRadius: 5,
    height: 140,
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

  cards2: {
    marginTop: 20,
    backgroundColor:'white',
    borderLeftWidth: 10,
    borderLeftColor: "#ed3238",
    borderRadius: 5,
    height: 160,
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

  cards3: {
    marginTop: 20,
    backgroundColor:'white',
    borderLeftWidth: 10,
    borderLeftColor: "#0d62ad",
    borderRadius: 5,
    height: 160,
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

  titleCard: {
    color: "black",
    fontSize: 17,
    marginBottom: 10,
    fontWeight: "bold"
  },

  textCard: {
    color: "black"
  },

  header: {
    backgroundColor: "#0d62ad"
  }

});



