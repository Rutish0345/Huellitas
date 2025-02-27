import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './app/Components/Header';
import Foother from './app/Components/Footer';
import LoginScreen from './app/screen/Login';
import PerfilUsuarioScreen from './app/screen/PerfilUsuario';
import RegistroScreen from './app/screen/Registro';
import RecuperacionScreen from './app/screen/Recuperar';
import RegistroMascotaScreen from './app/screen/RegistroMascota';
import ControlDispensadorScreen from './app/screen/Dispensador';
import HistorialDispensadorScreen from './app/screen/Historial';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ControlDispensadorScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
