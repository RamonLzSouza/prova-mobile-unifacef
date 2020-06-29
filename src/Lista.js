import React from 'react';
import {Button, View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
export default class Lista extends React.Component {
  static navigationOptions = {
    title: 'Cadastro de Comidas',
    headerLeft: (
      <Image style={{ width: 50, height: 50, borderRadius: 50/2, marginLeft: 15 }} source={require('../assets/comida.jpg')}/>),
    headerStyle: {
      backgroundColor: '#FFFF00',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    
    
    },
  };

  constructor (props) {
    super(props);
    
    this.state = {dados: []};
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.listar();
      }
    )
  }

  listar() {
      fetch('https://crudcrud.com/api/4e5fe0cddf7844448884f683cb68201a/comidas')
      .then((response) => response.json())
      .then((respJson) => {
         this.setState({dados: respJson});
      })
      .catch ((error) => console.error(error));
  }


  render() {
    return ( 
      <SafeAreaView style={styles.container}>
      
        <View>
          <Button 
            title="Novo"
            color="#000"
            onPress={()=>this.props.navigation.navigate('Novo')}/>
          <Text style={styles.comida}>Comidas: </Text>
          
          {
            this.state.dados.map((l, i) => 
              (
                <Text>
                  Nome: {l.nome}{"\n"} 
                  Tipo: {l.tipo}{"\n"} 
                  Calorias: {l.qtdCalorica}kcal{"\n"}
                  Combina com: {l.combina}{"\n"}
                  ---------------------------------------------- </Text>

              )
            )
          }
        </View>
         
      </SafeAreaView>
      
    )
       
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffd6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  comida: {
    alignItems: 'left',
    color: "#FFFF00",
    fontWeight: "bold",
    fontSize: 22,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  }
})