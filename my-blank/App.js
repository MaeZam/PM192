//Zona 1: importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react' ; 

// const Texto=(props)=>{
//   const {contenido} = props
//   return(
//     <Text> {contenido} </Text>
//   )
// }

//componente con children 
// const Texto=(props)=>{
//   const {children} = props
//   return(
//     <Text> {children} </Text>
//   )
// }

const Texto=({style})=>{ //uso del style
  const[contenido, setContenido] = useState('Hello World React Native')
  const actualizarTexto = () => {
    setContenido('Estado actualizado')
  }
  return(
    // utilizar el estilo texto y uso de corchetes para usar más de una propiedad
    <Text style={[styles.text, style] }onPress={actualizarTexto}>{contenido}</Text>
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
      <Texto contenido ="React Native"></Texto> 
      <Texto>Hello</Texto>
      <Texto>World</Texto>
      <Texto>React Native</Texto>
      */}
      {/*uso de los componentes del style*/}
      <Texto style={styles.blue}></Texto>
      <Texto style={styles.yellow}></Texto>
      <Texto style={styles.purple}></Texto>

      {/* <Button title='Presioname!'></Button> */}

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
    alignItems: 'base-line', //izquierda a derecha, se usan los mismo que los de justifyContent
    //stretch, en este caso hay que desactivar el width para evitar error
    //con el uso del base-line se desactiva el height
    //de arriba a abajo
    justifyContent: 'center', //flex-start para posicionar los elementos en cierto punto
    //space-between, space-around, space-evely
    flexDirection: 'column', //para que se pueda ver el texto en una sola linea
    //row-reverse, column-reverse
  },
  // Clase
  //uso de propiedades
  //en react es densidad por pixeles, osea que depende de la calidad de la pantalla que se va a reflejar el resultado visual
  text:{
    color: 'black',
    fontSize: 25,
    //height: 100, //100 de lo que se tiene disponible en la pantalla
    // width : 100,
    

  },
  blue:{
    //flex:1, //uso de la propiedad flex
    backgroundColor: 'blue'
  },
  yellow:{
    backgroundColor: 'yellow'
  },
  purple:{
    backgroundColor: 'purple'
  }



});
