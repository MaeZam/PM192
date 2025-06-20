// Switch

//Zona 1: importaciones
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// import React,{useState} from 'react' ; 


//Zona 2: Main - ejecución
export default function App() {


  const [activarSwitch, setActivarSwitch] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);

  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);



  return (
    <SafeAreaProvider>

       <SafeAreaView  style={[styles.contenedor, modoOscuro && styles.fondoOscuro]} >
        

        {/* Aquí van los componentes
        <Text style = {[styles.titulo, modoOscuro && styles.textoClaro]}>
          Práctica con Switchs
        </Text> */}

        <View style={styles.opcion}>

          {/* <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Activar Switch 2
          </Text> */}

          {/* <Switch 
            value={activarSwitch}
            onValueChange={setActivarSwitch}
            trackColor= {{false:'#ccc', true:'#4caf50'}}
            thumbColor={activarSwitch?'#ffffff':'#999999'}>
          </Switch> */}

          <Button
            title="Presioname"
            color="#841584"
            onPress={() => alert('Botón presionado')}>

          </Button>
           
          {/* boton 2 */}
          <Button
            title={botonDesactivado ? "Desactivado" : "Desactivame"}
            disabled={botonDesactivado}
            onPress={() => setBotonDesactivado(true)}
            >
            </Button>

            {/* boton 3 */}
          <TouchableOpacity
            onPress={() => alert('Botón tocado')}
          >
            <Image
              source={require('./assets/image.png')}
              style={styles.imagen}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.botonJustificado}>
          <Button
            title="Left Button"
            color="#674323"
            ></Button>
            <Button
            title="Right Button"
            color="#097865"
            ></Button>           

        </View>

        {/* <View style={styles.opcion}>

          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Modo Oscuro
          </Text>

          <Switch 
            value={modoOscuro}
            onValueChange={setModoOscuro}
            disabled = {!activarSwitch}
            trackColor = {
              !activarSwitch
              ?{false:'#ccc', true:'#4caf50'}
              :{false: '#ccc', true: '#4caf50'}
            }
            thumbColor={
              !activarSwitch
                ?'#ff3b30'
                :modoOscuro
                ? '#ffffff'
                :'#999999'
                }>
          </Switch>

        </View> */}

        

        </SafeAreaView>

    </SafeAreaProvider>
             
  );
}


const styles = StyleSheet.create({
 
  contenedor: {
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 30,
  justifyContent: 'center',
   },

  // titulo: {
  //   fontSize: 24,
  //   marginBottom: 40,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  // },


  // fondoOscuro: {
  //   backgroundColor: "#1a1a1a"
  // },

  // textoClaro: {
  //   color: '#ffffff'
  // },

  opcion: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 30,
  alignItems: 'center',
  },

  // etiqueta: {
  //   fontSize: 18,
  // }

  //estilos para los botones
  botonJustificado:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dynamucButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center',
  },

  DynamicText: {
    color: '#345676',
    fontSize: 18,
  },

  imagen :{
    width: 100,
    height: 100,
  }



});