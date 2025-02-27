import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const historial = [
  { id: '1', fecha: '2025-02-25', evento: 'Comida dispensada' },
  { id: '2', fecha: '2025-02-25', evento: 'Agua dispensada' },
  { id: '3', fecha: '2025-02-24', evento: 'Comida dispensada' },
  { id: '4', fecha: '2025-02-23', evento: 'Agua dispensada' },
];

const HistorialDispensadorScreen = () => {
  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Historial del Dispensador" />

      <FlatList
        data={historial}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.fecha}>{item.fecha}</Text>
            <Text style={styles.evento}>{item.evento}</Text>
          </View>
        )}
      />

      <Footer contacto="Soporte: contacto@huellitas.com" derechos="Historial v1.0.0" />
    </View>
  );
};

export default HistorialDispensadorScreen;

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B3C7E6',
  },
  fecha: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6D6E71',
  },
  evento: {
    fontSize: 14,
    color: '#F4A261',
  },
});
