//zona 1: importaciones
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,  } from 'react-native';

//zona 2: main(Ejecución)
export default function App() {

  const [nombre, setNombre] = useState('');

  const mostrarAlerta = () => {
    if (nombre.trim()=== ''){
      Alert.alert('Error', 'Por favor escribe algo');
      alert('Escribe algo');
    }
    else{
      Alert.alert('Bienvenido ', `Hola ${nombre} ,  bienvenido a nuestras app`);
      alert('Hola ' + nombre + ' Bienvenido')
    }
    
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Ingresa tu nombre </Text>
      <TextInput 
      style={styles.input} 
      placeholder='Escribe tu nombre'
      onChangeText={setNombre}
      value={nombre}
      >
      </TextInput>

      <Button title='Enviar' onPress={mostrarAlerta}></Button>
      
    </View>
  );
}

//Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding : 20,
    justifyContent: 'center',
  },

  //texto
  text:{
    marginBottom : 20,
    fontSize : 18,
    color : '#000',

  },
  input : {
    borderWidth : 1,
    borderColor : '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor : '#f9f9f9',
    color : '#000',
  },
});
