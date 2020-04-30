import React, { Component } from 'react';
import { Container, Header, Title, Left, Right, Body, Content, Button, Text, CardItem, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import { Card } from 'react-native-cards';

export default class Contato extends Component {

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
            <Title> Contato</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <Text style={styles.textoInicio}>A Ação Comunitária fica na galeria LaSalle e funciona das 9h ás 21h.</Text>
  
                <Card style={styles.cards}>
                  <Text style={styles.titleCard}>TELEFONE</Text>
                  <Text style={styles.textCard}>(21) 2199-6600 (RAMAL 6711)</Text>
                </Card>

                <Card style={styles.cards2}>
                  <Text style={styles.titleCard}>E-MAIL</Text>
                  <Text style={styles.textCard}>nac.uni@unilasalle.org </Text>
                </Card>

                <Card style={styles.cards3}>
                  <Text style={styles.titleCard}>ENDEREÇO</Text>
                  <Text style={styles.textCard}>Rua Gastão Gonçalves, 79, Santa Rosa - Niterói RJ, 24240-030</Text>
                </Card>

                <Text style={styles.sociais}>Nos siga nas redes sociais:</Text>


           <Card style={styles.cardsocial}>
            <CardItem button onPress={ ()=>{ Linking.openURL('https://www.instagram.com/acao.comunitariarj/')}}>
              <Icon active name="logo-instagram" />
              <Text>Instagram </Text>
             </CardItem>    

             <CardItem button onPress={ ()=>{ Linking.openURL('https://www.facebook.com/acaocomunitarialasallerio/')}}>
              <Icon active name="logo-facebook" />
              <Text>Facebook </Text>
             </CardItem>

             <CardItem button onPress={ ()=>{ Linking.openURL('https://twitter.com/intent/tweet?text=Setor%20de%20A%C3%A7%C3%A3o%20Comunit%C3%A1ria&url=https%3A%2F%2Fwww.unilasalle.edu.br%2Frj%2Fservicos%2Fsetordeacaocomunitaria')}}>
              <Icon active name="logo-twitter" />
              <Text>Twitter </Text>
             </CardItem>

             <CardItem button onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.unilasalle.edu.br%2Frj%2Fservicos%2Fsetordeacaocomunitaria')}}>
              <Icon active name="logo-linkedin" />
              <Text>Linkedin</Text>          
             </CardItem>

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
    height: 130,
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
    height: 130,
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
  },

  sociais: {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 5
  },

  cardsocial: {
    marginBottom: 40
  },

  textoInicio: {
    marginLeft: 5
  }

});



