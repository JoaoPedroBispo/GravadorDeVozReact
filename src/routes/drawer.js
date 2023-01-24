import Venda from "../pages/venda";
import Inicio from "../pages/inicio";
import Ouvir from "../pages/ouvir";
import React from "react";
import Style from "./style";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Configurações from "../pages/configurações";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function drawer() {
  const navigation = useNavigation();
  const navegar = (Inicio) => {
    navigation.navigate(Inicio, {});
  };
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="EasyRedorder"
        component={Inicio}
        options={{
          headerShown: false,
          animation: "none",
          title: () => (
            <Text style={Style.title}>
              Easy<Text style={Style.title2}>Redorder</Text>
            </Text>
          ),
          drawerActiveBackgroundColor: "transparent",
        }}
      />
      <Drawer.Screen
        name="Venda"
        component={Venda}
        options={{
          headerShown: false,
          animation: "none",
          title: () => <Text style={Style.text}>Atualize para o Pro</Text>,
          drawerIcon: () => (
            <LinearGradient
              style={Style.sejaPro}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity>
                <Text style={Style.sejaProText}>Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Configurações}
        options={{
          headerShown: false,
          animation: "none",
          drawerIcon: () => (
            <Ionicons name="settings-sharp" size={25} style={Style.icon} />
          ),
        }}
      />

      <Drawer.Screen
        name="Perguntas"
        component={Inicio}
        options={{
          headerShown: false,
          animation: "none",
          title: () => <Text style={Style.text}>Perguntas Frequentes</Text>,
          drawerIcon: () => (
            <MaterialIcons name="live-help" size={25} style={Style.icon} />
          ),
        }}
      />

      <Drawer.Screen
        name="Apps"
        component={Inicio}
        options={{
          headerShown: false,
          animation: "none",
          title: () => <Text style={Style.text}>Mais Apps</Text>,
          drawerIcon: () => (
            <AntDesign name="appstore1" size={25} style={Style.icon} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
