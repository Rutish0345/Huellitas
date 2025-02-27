// screens/RecuperacionScreen.tsx
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Boton from '../Components/Boton';

const RecuperacionScreen = () => {
  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Recuperar Acceso" />
      
      <View style={styles.contenido}>
        <Text style={styles.instrucciones}>
          Ingresa tu correo electrónico para restablecer tu contraseña
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#6D6E71"
          keyboardType="email-address"
        />
        
        <Boton
          texto="Enviar Código"
          tipo="primario"
          onPress={() => {}} 
        />
        
        <Boton
          texto="Cancelar"
          tipo="secundario"
          onPress={() => {}} 
        />
      </View>
      
      <Footer 
        contacto="Asistencia técnica: +1 234 5678" 
        derechos="Huellitas - Todos los derechos reservados" 
      />
    </View>
  );
};

export default RecuperacionScreen;

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: '#F5F5DC' 
    },
    contenido: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D2B48C', 
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        fontSize: 16,
        color: '#6D6E71'
    },
    instrucciones: {
        color: '#6D6E71',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 25,
        lineHeight: 24
    }
});