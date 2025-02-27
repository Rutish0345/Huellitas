import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Propiedades = {
    titulo: string
}

const Header = (props: Propiedades) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{props.titulo}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F4A261',
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        elevation: 5
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});