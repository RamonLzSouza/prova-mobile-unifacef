import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}



export default class Novo extends React.Component {
  static navigationOptions = {
    title: 'Adicionar Comida',
    headerLeft: (
      <Image style={{ width: 50, height: 50, borderRadius: 50 / 2, marginLeft: 15 }} source={require('../assets/comida.jpg')} />),
    headerStyle: {
      backgroundColor: '#FFFF00',
    },
    headerTintColor: '#00000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      tipo: '',
      qtdCalorica: '',
      combina: ''

    }
  }

  onSalvar() {
    fetch('https://crudcrud.com/api/4e5fe0cddf7844448884f683cb68201a/comidas',
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify(this.state)
      }
    )
      .then(response => response.json())
      .then(respJson => {
        this.props.navigation.navigate('Lista');
      });
  }

  onCancelar() {
    this.props.navigation.navigate('Lista');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Separator />
        <View>
          <Image style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 160 / 2,
            width: 160,
            height: 160,
            opacity: '100%'
          }} source={require('../assets/comida2.jpg')} />
        </View>
        <Separator />
        <View>
          <TextInput
            style={styles.input}
            placeholder='Digite a comida'
            value={this.state.nome}
            onChangeText={(nome) => this.setState({ nome })} />
          <TextInput
            style={styles.input}
            placeholder='Doce ou Salgada?'
            value={this.state.tipo}
            onChangeText={(tipo) => this.setState({ tipo })} />
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder='Calorias'
            value={this.state.qtdCalorica}
            onChangeText={(qtdCalorica) => this.setState({ qtdCalorica })} />
          <TextInput
            style={styles.input}

            placeholder='O que combina junto?'
            value={this.state.combina}
            onChangeText={(combina) => this.setState({ combina })} />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.onSalvar.bind(this)}>
          <Text style={styles.btnText}>SALVAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.onCancelar.bind(this)}>
          <Text style={styles.btnText}>CANCELAR</Text>
        </TouchableOpacity>
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    backgroundColor: '#000',
    borderColor: '#accaf2',
    color: '#fff',
    height: 32,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  btn: {
    width: '100%',
    height: 36,
    padding: 5,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
})

