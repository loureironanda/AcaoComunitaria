import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';
import * as firebase from 'firebase';
export default class Profile extends React.Component {
  
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null
  }

  handleSignUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
          this.props.navigation.navigate('Home')

            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(error => this.setState({ errorMessage: 'Encontramos um erro no cadastro' }));
  };

  constructor(){
      super()
  }
  
  render(){
      return(
      <Container>
        <Content>
          <View style={styles.container}>
          <Image style={styles.logo}
              source={require('./img/logo.jpg')}  
              style={{marginTop: 70,width: 305, height: 160}} 
            />

            <View style={styles.errorMessage}>
               {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
            </View>

            <TextInput placeholder="Nome" style={styles.input} onChangeText={name => this.setState({ name })} value={this.state.name}/>

            <TextInput placeholder="E-mail" style={styles.input} onChangeText={email => this.setState({ email })} value={this.state.email}/>

            <TextInput placeholder="Senha" style={styles.input} secureTextEntry onChangeText={password => this.setState({ password })} value={this.state.password}/>
            
            <TouchableOpacity style={styles.buttoninput} onPress={this.handleSignUp}>
                <Text style={styles.textbutton}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonlogin} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textologin}>Já possui uma conta? <Text style={styles.login}>Login</Text> </Text>
             
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
    marginTop: "45%",
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
    borderColor: "#c7c7c7",
    borderRadius: 30
  },

  buttoninput: {
    marginTop: 10,
    width: "100%",
    backgroundColor: '#0D62AD',
    padding: 15,
    borderRadius: 30
  }, 

  textbutton: {
    color: '#fff',
    textAlign: "center",
  },

  logo: {
    marginBottom: 20,
  },

  textocadatro: {
    textAlign: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10
  },

    
  login: {
    color: "#fcbe41"
},

textologin: {
  textAlign: "center",
  fontWeight: 'bold',
  marginTop: 30
},

  error: {
    color: "red",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center"
  }
});
