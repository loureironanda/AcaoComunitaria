import React, { Component } from 'react';
import { Container, Header, Title, Left, Right, Body, Content, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Linking} from "react-native";
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

                <Text style={styles.textoabout}>
                  Tá, ok! E o que você pode fazer de concreto? Ser voluntário com crianças, adolescentes, dar aulas 
                  para a comunidade, trabalhos com música e arte, coordenar oficinas e os projetos, fazer cursos de
                  liderança e participar de atividades relacionadas à espiritualidade e religiosidade. 
                  
               <Text>{"\n\n"}</Text>
                  Sabe aquela ideia sobre melhorar as coisas? Sobre tornar o mundo um lugar um pouco melhor? Aqui a gente vai
                  te ajudar a encontrar o COMO! Encontrar maneiras de sonhar e AGIR. VEM LOGO!

                </Text>

                <Button style={styles.btnvolunteer} title = "SEJA UM VOLUNTÁRIO" 
                onPress={ ()=>{ Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSco_NeIgp5DVO-uImznrgB6P2IFBf1Ob0S1veQAo_jHgRDORQ/viewform?c=0&w=1')}}>

<Text>QUERO SER UM VOLUNTÁRIO</Text>
                </Button>

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
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    marginHorizontal: 20,
  },

  textoabout: {
    textAlign: "left",
    padding: 6,
    fontSize: 15,
    lineHeight: 23
  },
  cards: {
    marginTop: 30,
    backgroundColor: "#fcbe41",
    borderRadius: 6,
    paddingBottom: 15
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
    marginBottom: 40
  },

  titleCard: {
    color: "white",
    fontSize: 21,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10
  },

  textCard: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },

  btnvolunteer: {
    color: "white",
    marginBottom: 40,
    marginTop: 30,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0d62ad"
  },

  header: {
    backgroundColor: "#0d62ad"
  }

});



