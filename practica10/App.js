import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

const FondoBienvenida = () => {
return (
<ImageBackground source={require('./assets/hello.png')} style= {styles.fondo}>
<View>
<Text  style={styles.titulo} >¡Bienvenido a la App!</Text>
</View>
</ImageBackground>
);
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FondoBienvenida />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 28,
    color: 'darkblue',
    fontWeight: 'bold',
  },
});
