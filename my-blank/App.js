// Switch
//Zona 1: importaciones
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import React,{useState} from 'react' ; 

//Zona 2: Main - ejecución
export default function App() {

  //Activar y desactivar el modo oscuro
  //El valor por defecto es false, lo que significa que el modo oscuro está desactivado
  //Al cambiar el estado a true, se activa el modo oscuro
  const [activarSwitch, setActivarSwitch] = useState(false);
  //Estado para el modo oscuro 
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <SafeAreaProvider>
       <SafeAreaView style={[styles.contenedor, modoOscuro && styles.fondoOscuro]}>
        
        {/*Se van a agregar más componentes */}
        <Text style={[styles.titulo, modoOscuro && styles.textoClaro]}>
          Práctica con Switches
        </Text>

        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Activar Switch 2
          </Text>
          {/* //Componente Switch que activa y desactiva el switch del modo oscuro */}
          <Switch 
            // {/*Estilos y funcionalidad del Switch */}
            value={activarSwitch}
            onValueChange={setActivarSwitch}
            // {/* El valor del Switch se actualiza con el estado activarSwitch */}
            trackColor={{false:'#ccc', true:'#4caf50'}}
            // {/* Color del cambio del switch */}
            thumbColor={activarSwitch ? '#ffffff' : '#999999'}>
          </Switch>
        </View>

        <View style={styles.opcion}>
          <Text style={[styles.etiqueta, modoOscuro && styles.textoClaro]}>
            Modo Oscuro
          </Text>
          
          <Switch 
            // {/*Estilos y funcionalidad del Switch */} {/* El valor del Switch se actualiza con el estado modoOscuro */}
            value={modoOscuro} 
            // {/* El switch solo se puede activar si el switch de arriba está activado */}
            disabled={!activarSwitch} 
            onValueChange={setModoOscuro}
            trackColor={
              !activarSwitch
                // Si el switch de arriba está desactivado, el color del track es gris
                ? {false:'#999999', true:'#ff3b30'}
                : {false: '#ccc', true: '#4caf50'}
            }
            // {/* Color del cambio del switch */}
            thumbColor={
              // Si el switch de arriba está desactivado, el color del thumb es gris
              !activarSwitch
                ? '#ff3b30' // Si el switch de arriba está desactivado, el color del thumb es rojo
                : modoOscuro // Si el modo oscuro está activado, el color del thumb es blanco
                  ? '#ffffff'
                  : '#999999'
            }>
          </Switch>
        </View>
        
        </SafeAreaView>
    </SafeAreaProvider>
             
  );
}

//zona 3: Estilos
const styles = StyleSheet.create({
 
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fondoOscuro: {
    backgroundColor: "#1a1a1a"
  },
  textoClaro: {
    color: '#ffffff'
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 18,
  }
});