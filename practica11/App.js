import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Switch, 
  Alert, 
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('splash'); // 'splash', 'login', 'registro'
  
  // Estados del registro
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoRegistro, setCorreoRegistro] = useState('');
  const [contrasenaRegistro, setContrasenaRegistro] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  
  // Estados del login
  const [correoLogin, setCorreoLogin] = useState('');
  const [contrasenaLogin, setContrasenaLogin] = useState('');

  // Base de datos de usuarios registrados (en memoria)
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);

  // Timer del Splash Screen
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setPantallaActual('login');
    }, 3000);
    return () => clearTimeout(temporizador);
  }, []);

  // Función para validar correo electrónico
  const validarCorreo = (correo) => {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
  };

  // Función para validar contraseña
  const validarContrasena = (contrasena) => {
    return contrasena.length >= 6;
  };

  // Función para validar nombre
  const validarNombre = (nombre) => {
    return nombre.trim().length >= 2;
  };

  // Función de registro
  const manejarRegistro = () => {
    // Validar nombre completo vacío
    if (nombreCompleto.trim() === '') {
      Alert.alert('Error', 'Ingresa tu nombre completo');
      return;
    }

    // Validar nombre mínimo
    if (!validarNombre(nombreCompleto)) {
      Alert.alert('Error', 'El nombre debe tener al menos 2 caracteres');
      return;
    }

    // Validar correo vacío
    if (correoRegistro.trim() === '') {
      Alert.alert('Error', 'Ingresa tu correo electrónico');
      return;
    }

    // Validar formato de correo
    if (!validarCorreo(correoRegistro)) {
      Alert.alert('Error', 'Ingresa un correo electrónico válido');
      return;
    }

    // Verificar si el correo ya está registrado
    const usuarioExistente = usuariosRegistrados.find(
      usuario => usuario.correo.toLowerCase() === correoRegistro.toLowerCase()
    );
    if (usuarioExistente) {
      Alert.alert('Error', 'Este correo electrónico ya está registrado');
      return;
    }

    // Validar contraseña vacía
    if (contrasenaRegistro.trim() === '') {
      Alert.alert('Error', 'Ingresa tu contraseña');
      return;
    }

    // Validar longitud de contraseña
    if (!validarContrasena(contrasenaRegistro)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Validar términos y condiciones
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    // Agregar usuario a la base de datos
    const nuevoUsuario = {
      nombre: nombreCompleto,
      correo: correoRegistro,
      contrasena: contrasenaRegistro
    };
    setUsuariosRegistrados([...usuariosRegistrados, nuevoUsuario]);

    // Registro exitoso
    Alert.alert(
      'Registro Exitoso',
      `Datos ingresados correctamente:\n\nNombre: ${nombreCompleto}\nCorreo: ${correoRegistro}\n\n¡Ya puedes iniciar sesión!`,
      [
        {
          text: 'Ir a Iniciar Sesión',
          onPress: () => {
            setNombreCompleto('');
            setCorreoRegistro('');
            setContrasenaRegistro('');
            setAceptaTerminos(false);
            setPantallaActual('login');
          }
        }
      ]
    );
  };

  // Función de login
  const manejarLogin = () => {
    // Validar correo vacío
    if (correoLogin.trim() === '') {
      Alert.alert('Error', 'Ingresa tu correo electrónico');
      return;
    }

    // Validar formato de correo
    if (!validarCorreo(correoLogin)) {
      Alert.alert('Error', 'Ingresa un correo electrónico válido');
      return;
    }

    // Validar contraseña vacía
    if (contrasenaLogin.trim() === '') {
      Alert.alert('Error', 'Ingresa tu contraseña');
      return;
    }

    // Validar longitud de contraseña
    if (!validarContrasena(contrasenaLogin)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Buscar usuario en la base de datos
    const usuarioEncontrado = usuariosRegistrados.find(
      usuario => 
        usuario.correo.toLowerCase() === correoLogin.toLowerCase() &&
        usuario.contrasena === contrasenaLogin
    );

    if (!usuarioEncontrado) {
      // Verificar si el correo está registrado pero la contraseña es incorrecta
      const correoExiste = usuariosRegistrados.find(
        usuario => usuario.correo.toLowerCase() === correoLogin.toLowerCase()
      );
      
      if (correoExiste) {
        Alert.alert('Error de Autenticación', 'Contraseña incorrecta');
      } else {
        Alert.alert('Error de Autenticación', 'Usuario no registrado. Por favor, regístrate primero.');
      }
      return;
    }

    // Login exitoso
    Alert.alert('Inicio de Sesión Exitoso', `¡Bienvenido ${usuarioEncontrado.nombre}!\nCorreo: ${correoLogin}`);
  };

  // RENDERIZADO PRINCIPAL

  // PANTALLA SPLASH
  if (pantallaActual === 'splash') {
    return (
      <ImageBackground
        source={require('./assets/fondo.jpeg')}
        style={estilos.imagenFondo}
      >
        <SafeAreaView style={estilos.contenedor}>
          <View style={estilos.splash}>
            <Image 
              source={require('./assets/logo.png')} 
              style={estilos.imagenLogo}
            />
            <Text style={estilos.tituloApp}>Welcome to my home...</Text>
            <Text style={estilos.textoCargando}>Cargando...</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  // PANTALLA DE LOGIN
  if (pantallaActual === 'login') {
    return (
      <ImageBackground
        source={require('./assets/fondo.jpeg')}
        style={estilos.imagenFondo}
      >
        <SafeAreaView style={estilos.contenedor}>
          <View style={estilos.formulario}>
            <Text style={estilos.logoTexto}>INICIAR SESIÓN</Text>
            <Text style={estilos.titulo}>Ingresa a tu cuenta</Text>

            <TextInput
              style={estilos.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#9C4DCC"
              value={correoLogin}
              onChangeText={setCorreoLogin}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={estilos.input}
              placeholder="Contraseña"
              placeholderTextColor="#9C4DCC"
              value={contrasenaLogin}
              onChangeText={setContrasenaLogin}
              secureTextEntry={true}
            />

            <TouchableOpacity 
              style={estilos.boton}
              onPress={manejarLogin}
            >
              <Text style={estilos.textoBoton}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[estilos.boton, estilos.botonSecundario]}
              onPress={() => setPantallaActual('registro')}
            >
              <Text style={estilos.textoBotonSecundario}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  // PANTALLA DE REGISTRO
  if (pantallaActual === 'registro') {
    return (
      <ImageBackground
        source={require('./assets/fondo.jpeg')}
        style={estilos.imagenFondo}
      >
        <SafeAreaView style={estilos.contenedor}>
          <View style={estilos.formulario}>
            <Text style={estilos.logoTexto}>REGISTRO</Text>
            <Text style={estilos.titulo}>Crea tu cuenta</Text>

            <TextInput
              style={estilos.input}
              placeholder="Nombre completo"
              placeholderTextColor="#9C4DCC"
              value={nombreCompleto}
              onChangeText={setNombreCompleto}
            />

            <TextInput
              style={estilos.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#9C4DCC"
              value={correoRegistro}
              onChangeText={setCorreoRegistro}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={estilos.input}
              placeholder="Contraseña"
              placeholderTextColor="#9C4DCC"
              value={contrasenaRegistro}
              onChangeText={setContrasenaRegistro}
              secureTextEntry={true}
            />
            <Text style={estilos.ayudaContrasena}>
              La contraseña debe tener al menos 6 caracteres
            </Text>

            <View style={estilos.contenedorSwitch}>
              <Switch
                value={aceptaTerminos}
                onValueChange={setAceptaTerminos}
                trackColor={{ false: '#D1C4E9', true: '#9C27B0' }}
                thumbColor={aceptaTerminos ? '#E1BEE7' : '#f4f3f4'}
              />
              <Text style={estilos.textoSwitch}>Acepto términos y condiciones</Text>
            </View>

            <TouchableOpacity 
              style={estilos.boton}
              onPress={manejarRegistro}
            >
              <Text style={estilos.textoBoton}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[estilos.boton, estilos.botonSecundario]}
              onPress={() => setPantallaActual('login')}
            >
              <Text style={estilos.textoBotonSecundario}>¿Ya tienes cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  // FALLBACK - Si no coincide con ninguna pantalla
  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.formulario}>
        <Text style={estilos.titulo}>ERROR - Pantalla: {pantallaActual}</Text>
        <TouchableOpacity 
          style={estilos.boton}
          onPress={() => setPantallaActual('login')}
        >
          <Text style={estilos.textoBoton}>Ir al Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  
  // Splash Screen
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(156, 39, 176, 0.8)',
  },
  imagenLogo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  tituloApp: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoCargando: {
    fontSize: 16,
    color: 'white',
  },

  // Formularios
  formulario: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    margin: 20,
    borderRadius: 15,
  },
  logoTexto: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#4A148C',
  },
  input: {
    borderWidth: 2,
    borderColor: '#CE93D8',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white',
    color: '#4A148C',
  },
  contenedorSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoSwitch: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4A148C',
  },
  boton: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#9C27B0',
  },
  textoBotonSecundario: {
    color: '#9C27B0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ayudaContrasena: {
    fontSize: 12,
    color: '#7B1FA2',
    marginBottom: 10,
    marginTop: -10,
  },
});