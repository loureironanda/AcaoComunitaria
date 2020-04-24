import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Text } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet, Linking, Image} from "react-native";
import Constants from 'expo-constants';

export default class Volunteer extends Component {

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
            <Title> Ser voluntário</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <Image style={styles.logo}
              source={require('./img/logo.jpg')}  
              style={{width: 305, height: 160, marginBottom: 40, marginLeft: 30, marginTop: 30}} 
            />

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

<Text style={styles.textvolunteer} >QUERO SER UM VOLUNTÁRIO</Text>
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

      btnvolunteer: {
        color: "#ffffff",
        marginBottom: 40,
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0d62ad",
        borderRadius: 30
      },
    
    header: {
        backgroundColor: "#0d62ad"
     },

     textvolunteer: {
        color: "#ffffff" 
     }

});
