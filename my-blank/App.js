//Zona 1: importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// const Texto=(props)=>{
//   const {contenido} = props
//   return(
//     <Text> {contenido} </Text>
//   )
// }

//componente con children 
const Texto=(props)=>{
  const {children} = props
  return(
    <Text> {children} </Text>
  )
}

//Zona 2: Main - ejecución
export default function App() {
  return (
    /*Todo componente debe estar dentro de views para que se pueda visualizar en la app */
    /*Todo va dentro de etiquetas*/
    <View style={styles.container}>

      {/* <Texto contenido="Hello"></Texto>
      <Texto contenido = "World"></Texto>
      <Texto contenido ="React Native"></Texto> */}
      <Texto>Hello</Texto>
      <Texto>World</Texto>
      <Texto>React Native</Texto>
      <Button title='Presioname!'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

//Zona 3: Estilos-Estetica del archivo
/*Hojas de estilo a la forma de reactive, similar a css pero NO es css */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
