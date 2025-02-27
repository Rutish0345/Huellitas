import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Boton from '../Components/Boton';

const RegistroMascotaScreen = () => {
  const [nombre, setNombre] = useState('');
  const [Tipo, setTipo] = useState('')
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');

  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Registrar Mascota" />
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la Mascota"
          value={nombre}
          onChangeText={setNombre}
          placeholderTextColor="#6D6E71"
        />
         <TextInput
          style={styles.input}
          placeholder="Tipo (perro o gato)"
          value={raza}
          onChangeText={setTipo}
          placeholderTextColor="#6D6E71"
        />
        <TextInput
          style={styles.input}
          placeholder="Raza"
          value={raza}
          onChangeText={setRaza}
          placeholderTextColor="#6D6E71"
        />
        <TextInput
          style={styles.input}
          placeholder="Edad (años)"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
          placeholderTextColor="#6D6E71"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          placeholderTextColor="#6D6E71"
        />

        <Boton texto="Registrar" tipo="primario" onPress={() => console.log('Mascota Registrada')} />
      </View>

      <Footer contacto="Soporte: contacto@huellitas.com" derechos="Registro de Mascota v1.0.0" />
    </View>
  );
};

export default RegistroMascotaScreen;

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  formulario: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#B3C7E6',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginVertical: 12,
    fontSize: 16,
    color: '#6D6E71',
  },
});
