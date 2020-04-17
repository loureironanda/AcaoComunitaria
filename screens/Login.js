import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

export default class Profile extends React.Component {
  
  constructor(){
      super()
  }

  render(){
      return(

      <Container >
        <Content>
          <View style={styles.container}>

          <Image style={styles.logo}
              source={require('./img/logo.jpg')}  
              style={{marginTop: 100, width: 305, height: 160}} 
            />

            <TextInput placeholder="E-mail" style={styles.input}/>

            <TextInput placeholder="Senha" style={styles.input}/>
            
            <TouchableOpacity style={styles.buttoninput} onPress={this.entrar}>

                <Text style={styles.textbutton}>ENTRAR </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncadastro} onPress={() => this.props.navigation.navigate('Cadastro')}>
              <Text style={styles.textocadastro}>Não possui conta? <Text style={styles.cadastrar}>Cadastre-se</Text> </Text>
             
              </TouchableOpacity>
         </View>
        </Content>
      </Container>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "35%",
    padding: 30
  },

  input: {
    height: 50,
    width: "100%",
    textAlign: "left",
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "#c7c7c7"
  },

  buttoninput: {
    marginTop: 10,
    width: "100%",
    backgroundColor: '#0D62AD',
    padding: 15
  }, 

  textbutton: {
    color: '#fff',
    textAlign: "center"
  },

  logo: {
    marginBottom: 20,
  },

  textocadastro: {
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: 30
  },
  
  cadastrar: {
      color: "#fcbe41"
  }

});

