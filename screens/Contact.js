import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content, 
Card, CardItem, Text, Icon} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Linking} from "react-native";
import Constants from 'expo-constants';

export default class Contact extends Component {
  
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
            <Title> Contato</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <Text>A Ação Comunitária fica na galeria LaSalle e funciona das 9h ás 21h.</Text>
      
           <Text>Deseja falar conosco e tirar dúvidas? Mande uma mensagem!</Text>

          {/* INFORMAÇÕES CONTATO */ }

           <Card style={styles.cards}>
              <Text style={styles.titleCard}>TELEFONE</Text>
                <Text style={styles.textCard}>(21) 2199-6600 (RAMAL 6711)</Text>
           </Card>

           <Card style={styles.cards2}>
              <Text style={styles.titleCard}>E-MAIL</Text>
                <Text style={styles.textCard}>nac.uni@unilasalle.org</Text>
           </Card>

           <Card style={styles.cards3}>
              <Text style={styles.titleCard}>ENDEREÇO</Text>
                <Text style={styles.textCard}>Rua Gastão Gonçalves, 79, Santa Rosa - Niterói RJ, 24240-030</Text>
           </Card>

           <Text style={styles.sociais}>Nos siga nas redes sociais:</Text>

            {/* REDES SOCIAIS */ }

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
  header: {
    backgroundColor: "#0d62ad"
  },
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: Constants.statusBarHeight    
  },
  scrollView: {
    marginHorizontal: 20
  },

  cardsocial: {
    marginBottom: 40
  },
  cards: {
    marginTop: 30,
    backgroundColor: "#fcbe41",
    borderRadius: 6,
    paddingBottom: 15
  },
  titleCard: {
    color: "white",
    fontSize: 21,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10
  },

  sociais: {
    fontSize: 22,
    marginBottom: 30
  },

  textCard: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  cards2: {
    backgroundColor: "#ed3238",
    borderRadius: 6,
    paddingBottom: 15
  },
  cards3: {
    backgroundColor: "#0d62ad",
    borderRadius: 6,
    paddingBottom: 15,
    marginBottom: 20
  },

  input: {
    height: 40,
    textAlign: "left",
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "#c7c7c7"
  },

  buttoninput: {
    marginTop: 10,
    backgroundColor: '#0D62AD',
    padding: 15,
    marginBottom: 30
  }, 

  textbutton: {
    color: '#fff',
    textAlign: "center",
  }

});

/*

<TextInput placeholder="Nome" style={styles.input}/>

          <TextInput placeholder="E-mail" style={styles.input}/>

          <Textarea marginTop={10} padding={10} maxLength={120} placeholder={'Mensagem'}  placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'} borderWidth={1} height={130} textAlignVertical={'top'} borderColor={'#c7c7c7'}/>

          <TouchableOpacity style={styles.buttoninput} onPress={this.entrar}>
              <Text style={styles.textbutton}>ENVIAR</Text>

              </TouchableOpacity>

              */