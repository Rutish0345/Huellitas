import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Propiedades = {
    contacto: string,
    derechos: string
}

const Foother = (props: Propiedades) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{props.contacto}</Text>
      <Text style={styles.texto}>{props.derechos}</Text>
    </View>
  );
};

export default Foother;

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#6D6E71',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        marginTop: 'auto'
    },
    texto: {
        fontSize: 14,
        color: '#FFFFFF',
        marginVertical: 2
    }
});