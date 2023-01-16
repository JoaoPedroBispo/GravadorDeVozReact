import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../pages/inicio";
import Venda from "../pages/venda";

const Stack = createNativeStackNavigator();

export default function StackNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Venda" component={Venda} />
    </Stack.Navigator>
  );
}
