import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, CardTitle, CardContent, CardButton, CardImage } from 'react-native-cards';


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
      <Content>
        <View style={styles.container}>
        
          {/* PROJETO DESABROCHAR */ }
    
          <Card style={styles.cards}>
            <CardImage source={require('./img/desabrochar.jpg')} />
            
            <CardTitle title="Desabrochar"/>

            <CardContent text="O Projeto acontece todos os sábados no Centro Social Vicenta Maria, 
            atendendo 30 crianças entre 6 e 14 anos. O voluntário conduzirá oficinas de recreação e valores."/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
          </Card>

          {/* PROJETO ELLU */ }

          <Card style={styles.cards}>
            <CardImage source={require('./img/encontro.jpg')} />
            
            <CardTitle title="Encontro de lideranças Lassalistas Universitárias (ELLU)"/>

            <CardContent text="Curso de formação de liderança em quatro etapas, desenvolvendo habilidades 
            de autoconhecimento, vocação, proatividade, organização, gestão, oratória, entre outros. 
            Cada etapa tem dois dias de imersão em acampamento com universitários e parceiros da Ação
            Comunitária. "/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
          </Card>

          {/* PROJETO PÉ PEQUENO */ }

          <Card style={styles.cards}>
            <CardImage source={require('./img/pe_pequeno.jpg')} />
            
            <CardTitle title="Pé Pequeno"/>

            <CardContent text="Ação Social na comunidade do Pé Pequeno, em Santa Rosa. A ação acontece uma 
            vez por semestre, com oficinas para diferentes públicos, confecção de currículo, horta comunitária,
             atendimentos de saúde, loja gratuita (Street Store), entre outras atividades."/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
          </Card>

          {/* PROJETO VOLUNTARIADO */ }

          <Card style={styles.cards}>
            <CardImage source={require('./img/voluntariado.jpg')} />
            
            <CardTitle title="Voluntariado"/>

            <CardContent text="Voluntariado no Setor de Ação Comunitária, desenvolvendo, coordenando ou 
            acompanhando os projetos do setor, como as campanhas de arrecadação."/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
          </Card>

          {/* PROJETO MUSICALIZAÇÃO */ }

          <Card style={styles.cards}>
            <CardImage source={require('./img/musica.jpg')} />
            
            <CardTitle title="Voluntariado de Musicalização"/>

            <CardContent text="Monitor voluntário em projeto de musicalização infantil para as turmas 
            da Educação Infantil da Escola La Salle Rio de Janeiro."/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
          </Card>

          {/* PROJETO PASTORAL */ }

          <Card style={styles.cards}>
            <CardImage source={require('./img/pastoral.jpg')} />
            
            <CardTitle title="Pastoral"/>

            <CardContent text="Eventos religiosos, missas, confissões, grupo de oração e terço."/>

            <CardButton style={styles.btnProjeto} onPress={() => {}} title="ver mais" color="#FFFFFF" />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  btnProjeto: {
    backgroundColor: "#0d62ad",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 140,
    paddingRight: 140,
    marginLeft: 15,
    marginBottom: 40,
    borderRadius: 20
  },
  
  cards: {
    marginTop: 20,
    borderBottomWidth: 6,
    borderBottomColor: "#fcbe41"
  }
});