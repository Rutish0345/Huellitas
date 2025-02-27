import { registerRootComponent } from 'expo';

import App from './App';

import LoginScreen from './app/screen/Login';
import  PerfilUsuarioScreen from './app/screen/PerfilUsuario';
import  RegistroScreen from './app/screen/Registro';
import  RecuperacionScreen from './app/screen/Recuperar';
import  PerfilMascotaScreen from './app/screen/PerfilMascota';
import  RegistroMascotaScreen from './app/screen/RegistroMascota';
import ControlDispensadorScreen from './app/screen/Dispensador';
import HistorialDispensadorScreen from './app/screen/Historial';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ControlDispensadorScreen);


