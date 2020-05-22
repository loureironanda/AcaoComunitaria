import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { StyleSheet,View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Text } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { Card } from 'react-native-cards';
import * as firebase from 'firebase';
export default class Home extends Component {

  state = {
    email: "",
    displayName: ""
  }

  componentDidMount() {
      const {email, displayName} = firebase.auth().currentUser

      this.setState({ email, displayName });
  }

  signOutUser = () => {
      firebase.auth().signOut();
  };

  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
      {
          title:"DESABROCHAR",
          text: "O Projeto acontece todos os sábados no Centro Social Vicenta Maria, atendendo 30 crianças entre 6 e 14 anos. O voluntário conduzirá oficinas de recreação e valores. ",
      },
      {
          title:"VOLUNTARIADO",
          text: "Voluntariado no Setor de Ação Comunitária, desenvolvendo, coordenando ou acompanhando os projetos do setor, como as campanhas de arrecadação.",
      },
      {
          title:"MUSICALIZAÇÃO",
          text: "Monitor voluntário em projeto de musicalização infantil para as turmas da Educação Infantil da Escola La Salle Rio de Janeiro.  ",
      },
      {
          title:"PASTORAL",
          text: "Eventos religiosos, missas, confissões, grupo de oração e terço.",
      },
      {
          title:"PÉ PEQUENO",
          text: "Oficinas para diferentes públicos, confecção de currículo, horta comunitária, atendimentos de saúde, loja gratuita (Street Store), entre outras atividades.",
      },
      ]
    }
  }

  _renderItem({item,index}){
    return (
      <View style={{
          backgroundColor:'white',
          borderLeftWidth: 10,
          borderLeftColor: "#fcbe41",
          borderRadius: 5,
          height: 230,
          padding: 30,
          marginLeft: 25,
          marginRight: 25,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          borderBottomColor: "#ddd",
          shadowColor: '#000',
          shadowOffset: { width: 10, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          elevation: 5}}>
        
        <Text style={{ fontSize: 15, textAlign: "right", color: "gray"}}> {this.state.activeIndex + 1} / 5</Text>
        <Text style={{color: "black", fontSize: 17, marginBottom: 10, fontWeight: "bold"}}>{item.title}</Text>
        <Text style={{color: "black", fontSize: 15}}>{item.text}</Text>
        
        
      </View>

    )
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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{  paddingLeft: 25, paddingTop: 40}}>
            <Text style={{ borderRadius: 30, padding: 7, width: 130, backgroundColor: "#fcbe41", fontSize: 16, color: "white"}}><Ionicons name="md-star-outline" size={16} color="white"/>  PROJETOS</Text>
          </View>
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 30, }}>
            <ScrollView style={styles.scrollView}>
              <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                  <Carousel
                    layout={"stack"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={400}
                    itemWidth={410}
                    renderItem={this._renderItem.bind(this)}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    
              </View>
  
              </ScrollView>
          </SafeAreaView>
      
        <View style={{  paddingLeft: 25, paddingTop: 30}}>
            <Text style={{ borderRadius: 30, padding: 7, width: 150, backgroundColor: "#ed3238", fontSize: 16, color: "white"}}><Ionicons name="md-heart" size={16} color="white"/>  VOLUNTÁRIO</Text>
        </View>

        <View style={{ padding: 20 }}>
          <Card style={styles.cards}>
            <Text style={styles.titleCard}>SER VOLUNTÁRIO</Text>
            <Text style={styles.textCard}>Sabe aquela ideia sobre melhorar as coisas? Sobre tornar o mundo um lugar um pouco melhor? Aqui a gente vai
                  te ajudar a encontrar o COMO! Encontrar maneiras de sonhar e AGIR. VEM LOGO!</Text>

            <TouchableOpacity style={styles.buttonVolunteer} onPress={() => this.props.navigation.navigate('Volunteer')}>
            <Text style={styles.textvolunteer2}>Quer ser um voluntário? <Text style={styles.textvolunteer}>Clique aqui</Text></Text>
            </TouchableOpacity>
          </Card>
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

  container: {
    padding: 30
  },

  cards: {
    backgroundColor:'white',
    borderLeftWidth: 10,
    borderLeftColor: "#ed3238",
    borderRadius: 5,
    height: 230,
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
    fontWeight: "bold"
  },

  textCard: {
    color: "black",
    marginTop: 10
  },

  buttonVolunteer: {
    backgroundColor: 'white',
  },

  textvolunteer: {
    color: "#ed3238"
  },

  textvolunteer2: {
    fontWeight: 'bold',
    marginTop: 20
  }

});

