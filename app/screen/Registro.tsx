
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Boton from '../Components/Boton';

const RegistroScreen = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Registro Huellitas" />
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#6D6E71"
        />
        
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
          texto="Crear cuenta"
          tipo="primario"
          onPress={() => console.log('Registro')}
        />
      </View>
      
      <Footer 
        contacto="Contacto: info@huellitas.com" 
        derechos="© 2024 Huellitas App" 
      />
    </View>
  );
};

export default RegistroScreen;

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: '#F5F5DC'
    },
    formulario: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#B3C7E6',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        fontSize: 16,
        color: '#6D6E71'
    }
});