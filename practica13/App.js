//importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import react,{useState} from 'react';

//zona de componentes hijo con props
const IndicadorCarga = ({color, size}) =>{
  return (
    <ActivityIndicator style={styles.indicador} color ={color} size = {size} />
  );
}

//zona main:
export default function App() {

  const [cargando, setCargando] = useState(false);

  //función de carga
  const iniciarCarga= () => {
    //cambiar el estado de cargando a true
    setCargando(true);
    //simula una carga de 3 segundos
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.textoPrincipal}>Uso de ActivityIndicator </Text>

      {
        cargando ? 
        <IndicadorCarga color = "deepskyblue" size = "large" /> : 
        (
          <Text style={styles.textoSecundario}>Presiona el botón para comenzar</Text>
        )
      }

      < Button title='Iniciar Carga' onPress={iniciarCarga} color= "#ff6f61"/>

      <StatusBar style="auto" />
    </View>
  );
}

//zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccff80',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2e2e2e',
  },
  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: '#3a3a3a',
  },

  indicador:{
    marginBottom: 20,
  }
});
