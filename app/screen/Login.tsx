import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Boton from '../Components/Boton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Iniciar Sesión" />
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#6D6E71"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#6D6E71"
        />
        
        <Boton
          texto="Ingresar"
          tipo="primario"
          onPress={() => console.log('Inicio de sesión')}
        />
        
        <TouchableOpacity style={styles.enlaceContenedor}>
          <Text style={styles.enlaceTexto}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      
      <Footer 
        contacto="Soporte: ayuda@huellitas.com" 
        derechos="Huellitas v1.0.0" 
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: '#F5F5DC' 
    },
    formulario: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginTop: -50
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#B3C7E6', 
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        marginVertical: 12,
        fontSize: 16,
        color: '#6D6E71' 
    },
    enlaceContenedor: {
        alignSelf: 'center',
        marginTop: 20
    },
    enlaceTexto: {
        color: '#F4A261', 
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline'
    }
});