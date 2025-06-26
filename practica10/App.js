/* Zone 1: Importaciones */
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

const FondoBienvenida = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.jpeg')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

/* Zone 2: Main */

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  // Oculta el splash después de 3 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar timer al desmontar
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Condicional para mostrar el splash screen o la pantalla principal */}      {showSplash ? ( 
        <FondoBienvenida />
      ) : (
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>Pantalla principal</Text>
        </View>
      )}
    </SafeAreaView>

  );
}

/* Zone 3: Estilos */
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
    backgroundColor: 'rgba(0,0,0,0.4)', // para oscurecer la imagen
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
