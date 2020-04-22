import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content, Text} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView, ScrollView, Picker, View } from "react-native";
import { Card } from 'react-native-cards';
export default class Calendar2 extends Component {
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
            <Title> Calendarário</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.picker}>
                <Picker selectedValue = {this.state.data} onValueChange = {this.updateData}>
                  <Picker.Item label = "Março, 2019" value = {0} />
                    <Picker.Item label = "Abril, 2019" value = {1} />
                    <Picker.Item label = "Maio, 2019" value = {2} />
                    <Picker.Item label = "Junho, 2019" value = {3} />
                </Picker>
              </View>
              
            {this.state.data === 0 && 
            <View>
                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>11/03 Início ano letivo - Calouros </Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>14 a 16/03 Congresso Mundial de Educação Lassalista</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>18 a 22/03 Semana de Acolhida (início da gincana solidária)</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>20 a 22/03 Colação de Grau</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>21/03 Missa de abertura do semestre</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>23/03 Seminário de Formação</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>28/03 Mesa redonda sobre História da Religiosidade no Leste Fluminense</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>28/03 Missa</Text>
                </Card>

                <Card style={styles.cards}>
                    <Text style={styles.textCard}>30/03 Encontro de coordenadores da Pastoral da Província</Text>
                </Card>
            </View>
            }

            {this.state.data === 1 && 
            <View>
                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>01/04 Início das oficinas de idiomas e geração de renda</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>04/04 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>06/04 Ação comunitária no Pé Pequeno</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>07/04 Missa dos 300 anos (Centro Cultural ABEL) – Dia de La Salle</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>10 a 12/04 Confissões</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>11/04 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>13/04 Início do Curso de Extensão em parceria com a Arquidiocese / Páscoa no Desabrochar</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>17/04 Final da Gincana Solidária</Text>
                 </Card>
            </View>
            }

            {this.state.data === 2 && 
            <View>
                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>04/05 Visita das crianças do Desabrochar a La Salle</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>06 a 17/05 Exposição Moleques de Bem (Galeria La Salle)</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>06 a 08/05 Semana de Fraternidade e Política Pública</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>09 a 15/05 Semana de La Salle</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>09/05 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>15/05 Missa de encerramento da Semana La Salle e dia de São João Batista de La Salle</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>23/05 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>30/05 Missa</Text>
                 </Card>
            </View>
            }

            {this.state.data === 3 && 
            <View>
                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>06/06 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>08/06 Caminha da Paz</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>27/06 Missa</Text>
                 </Card>

                 <Card style={styles.cards}>
                    <Text style={styles.textCard}>29 e 30/06 Encontro de Líderes Lassalistas Universitários (ELLU)</Text>
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
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 17,
    textAlign: "center"
  },

  cards: {
    marginTop: 10,
    backgroundColor: "#fcbe41",
    borderRadius: 6,
    minHeight: 90,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

