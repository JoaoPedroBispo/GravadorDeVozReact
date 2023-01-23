import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import Style from "./style";

export default function Configurações() {
  return (
    <View style={Style.continer}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => configurações()}>
          <Feather name="arrow-left" size={32} style={Style.icon} />
        </TouchableOpacity>
        <Text style={Style.title}>Configurações</Text>
      </View>

      <View style={Style.cont}>
        <Text style={Style.title2}>Geral</Text>
        <Text style={Style.text}>Liguagem</Text>
        <Text style={Style.subText}>Português (Brasil)</Text>
      </View>
    </View>
  );
}
