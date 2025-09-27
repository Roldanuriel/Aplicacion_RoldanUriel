import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

import Principal from "./src/Pages/Home";
import Inicio from "./src/Pages/Inicio";
import Parati from "./src/Pages/Parati";
import Configuracion from "./src/Configuration/Configuracion";
import Formulario from "./src/components/Formulario";
import Buscar from "./src/components/Buscar";
import DetalleProducto from "./src/Pages/DetalleProducto"; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ParaTi" component={Parati} />
        <Stack.Screen name="Productos" component={Inicio} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="DetalleProducto" component={DetalleProducto} /> 
      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
