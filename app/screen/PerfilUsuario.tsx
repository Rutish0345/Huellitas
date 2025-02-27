// screens/PerfilUsuarioScreen.tsx
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Boton from '../Components/Boton';

const PerfilUsuarioScreen = () => {
  return (
    <View style={styles.contenedorPrincipal}>
      <Header titulo="Mi Perfil" />
      
      <View style={styles.contenido}>
        <View style={styles.seccionSuperior}>
          {/* Espacio reservado para avatar */}
          <View style={styles.espacioAvatar}></View>
          
          <Text style={styles.nombreUsuario}>Cayetano</Text>
          <Text style={styles.correoUsuario}>cayetano@huellitas.com</Text>
        </View>

        <View style={styles.seccionInformacion}>
          <View style={styles.itemPerfil}>
            <Text style={styles.tituloItem}>Teléfono</Text>
            <Text style={styles.valorItem}>+52 55 1234 5678</Text>
          </View>
          
          <View style={styles.itemPerfil}>
            <Text style={styles.tituloItem}>Mascotas registradas</Text>
            <Text style={styles.valorItem}>2</Text>
          </View>
        </View>

        <View style={styles.botonesAccion}>
          <Boton
            texto="Editar Perfil"
            tipo="primario"
            onPress={() => {}}
          />
          <Boton
            texto="Cambiar Contraseña"
            tipo="secundario"
            onPress={() => {}}
          />
        </View>
      </View>
      
      <Footer
        contacto="Soporte: contacto@huellitas.com" 
        derechos="Cuenta verificada" 
      />
    </View>
  );
};

export default PerfilUsuarioScreen;

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: '#F5F5DC'
    },
    contenido: {
        flex: 1,
        padding: 20
    },
    seccionSuperior: {
        alignItems: 'center',
        marginVertical: 25
    },
    espacioAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#ABDADC',
        backgroundColor: '#FFFFFF40', 
        marginBottom: 15
    },
    nombreUsuario: {
        fontSize: 24,
        fontWeight: '600',
        color: '#6D6E71'
    },
    correoUsuario: {
        fontSize: 16,
        color: '#F4A261',
        marginTop: 5
    },
    seccionInformacion: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginVertical: 15
    },
    itemPerfil: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#B3C7E630'
    },
    tituloItem: {
        fontSize: 16,
        color: '#6D6E71'
    },
    valorItem: {
        fontSize: 16,
        fontWeight: '500',
        color: '#D2B48C'
    },
    botonesAccion: {
        marginTop: 20,
        gap: 15
    }
});