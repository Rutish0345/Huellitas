import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Propiedades = {
    texto: string,
    tipo: 'primario' | 'secundario',
    onPress: () => void
}

const Boton = (props: Propiedades) => {
  return (
    <TouchableOpacity 
      style={[
        styles.base, 
        props.tipo === 'primario' ? styles.primario : styles.secundario
      ]}
      onPress={props.onPress}>
      <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
    base: {
        padding: 15,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center'
    },
    primario: {
        backgroundColor: '#F4A261'
    },
    secundario: {
        backgroundColor: '#ABDADC',
        borderWidth: 2,
        borderColor: '#6D6E71'
    },
    texto: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    }
});