import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, SafeAreaView, Image, ScrollView } from "react-native";
import Lightbox from 'react-native-lightbox';
export default class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, image:"https://www.unilasalle.edu.br/uploads/componentes/95596d1d86ce2eaf1bc857a5f3e3adec.JPG"},
        {id:2, image:"https://www.unilasalle.edu.br/uploads/componentes/37fd60e6977d399a41d72c056d165a23.JPG"} ,
        {id:3, image:"https://www.unilasalle.edu.br/uploads/componentes/50ea6b69c9190da50bced493bf13f614.JPG"},
        {id:4, image:"https://www.unilasalle.edu.br/uploads/componentes/b384e0ec7fdc8e6d941b943e8e77c1ae.JPG"}, 
        {id:5, image:"https://www.unilasalle.edu.br/uploads/componentes/cac025a9eb4ad43f1f0888894a7939bf.JPG"}, 
        {id:6, image:"https://www.unilasalle.edu.br/uploads/componentes/c770613ed461fbfa961e30a700bcad1c.JPG"}, 
        {id:7, image:"https://www.unilasalle.edu.br/uploads/componentes/6fd2bd23b44a11191a2decd2cce6696e.jpg"}, 
        {id:8, image:"https://www.unilasalle.edu.br/uploads/componentes/de8bae06afa266b39e807242760c5d52.JPG"},
        {id:9, image:"https://www.unilasalle.edu.br/uploads/componentes/85bd54e82f83ca161ad1bda56d825118.jpg"},
        {id:9, image:"https://www.unilasalle.edu.br/uploads/componentes/befd8998ab28eaaf13211566b3002f67.jpg"},
        {id:10, image:"https://www.unilasalle.edu.br/uploads/componentes/54d6528a03b47ee157b17756789e9971.JPG"},
        {id:11, image:"https://www.unilasalle.edu.br/uploads/componentes/3b1013d11ef159f298d257e03d44d51b.JPG"}, 
      ]
    };
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
            <Title> Galeria</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={this.state.data}
                horizontal={false}
                numColumns={2}
                keyExtractor= {(item) => {
                  return item.id;
                }}
                ItemSeparatorComponent={() => {
                  return (
                    <View style={styles.separator}/>
                  )
                }}
                renderItem={(post) => {
                  const item = post.item;
                  return (
                    <View style={styles.card}>
                      <Lightbox underlayColor="white">
                        <Image style={styles.cardImage} resizeMode="contain" source={{uri:item.image}}/>
                      </Lightbox>
                    </View>
                  )
              }}/>

            </ScrollView>
          </SafeAreaView>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30,
    backgroundColor: "white"
  },
  
  header: {
    backgroundColor: "#0d62ad"
  },

  item: {
    alignItems: "center",
    backgroundColor: "white",
    flexGrow: 1,
    flexBasis: 0,
    margin: 4
  },

  text: {
    color: "#333333"
  },

  list: {
    paddingHorizontal: 10,
    backgroundColor: "white",
  },

  listContainer:{
    alignItems: 'center'
  },

  separator: {
    marginTop: 10,
  },

  card:{
    marginVertical: 0,
    flexBasis: "49%",
    marginHorizontal: 5,
  },

  cardImage:{
    flex: 1,
    height: 130,
    width: null,
    borderRadius: 20
  }
});






