import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/inicio";
import Venda from "../pages/venda";
import Ouvir from "../pages/ouvir";
import Configurações from "../pages/configurações";

const Stack = createNativeStackNavigator();

export default function StackNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
      <Stack.Screen
        name="Venda"
        component={Venda}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />

      <Stack.Screen
        name="Ouvir"
        component={Ouvir}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
      <Stack.Screen
        name="Configurações"
        component={Configurações}
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack.Navigator>
  );
}
