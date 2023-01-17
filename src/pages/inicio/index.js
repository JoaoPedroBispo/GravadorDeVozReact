import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import Style from "./style";

export default function Inicio() {
  return (
    <View style={Style.continer}>
      <View style={Style.header}>
        <TouchableOpacity>
          <Feather name="menu" size={32} style={Style.icon} />
        </TouchableOpacity>
        <Text style={Style.title}>
          Easy<Text style={Style.title2}>Redorder</Text>
        </Text>
        <View>
          <TouchableOpacity style={Style.sejaPro}>
            <Text style={Style.sejaProText}>Seja Pro</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.cont1}>
        <TouchableOpacity>
          <Text style={Style.textGravar}>Gravar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Style.textOuvir}>Ouvir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
