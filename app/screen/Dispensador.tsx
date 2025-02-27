import { StyleSheet, Text, View, TouchableOpacity, Vibration, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ControlDispensadorScreen = () => {
  const [estadoComida, setEstadoComida] = useState(false);
  const [estadoAgua, setEstadoAgua] = useState(false);
  const animacionComida = useRef(new Animated.Value(0)).current;
  const animacionAgua = useRef(new Animated.Value(0)).current;

  const toggleComida = () => {
    setEstadoComida(!estadoComida);
    Animated.timing(animacionComida, {
      toValue: estadoComida ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const toggleAgua = () => {
    setEstadoAgua(!estadoAgua);
    Animated.timing(animacionAgua, {
      toValue: estadoAgua ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Control del Dispensador" />

      <View style={styles.contenido}>
        {}
        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Comida</Text>
          <Animated.View style={[
            styles.indicador,
            { backgroundColor: animacionComida.interpolate({
                inputRange: [0, 1],
                outputRange: ['#E63946', '#2A9D8F'],
              })
            }
          ]} />
          <TouchableOpacity style={styles.boton} onPress={toggleComida}>
            <Text style={styles.textoBoton}>
              {estadoComida ? 'Desactivar Comida' : 'Activar Comida'}
            </Text>
          </TouchableOpacity>
        </View>

        {}
        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Agua</Text>
          <Animated.View style={[
            styles.indicador,
            { backgroundColor: animacionAgua.interpolate({
                inputRange: [0, 1],
                outputRange: ['#E63946', '#2A9D8F'],
              })
            }
          ]} />
          <TouchableOpacity style={styles.boton} onPress={toggleAgua}>
            <Text style={styles.textoBoton}>
              {estadoAgua ? 'Desactivar Agua' : 'Activar Agua'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer contacto="Soporte: contacto@huellitas.com" derechos="Control Dispensador v2.0.0" />
    </View>
  );
};

export default ControlDispensadorScreen;

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tarjeta: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#264653',
  },
  indicador: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#264653',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
