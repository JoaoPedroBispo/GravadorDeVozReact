import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Style from "./style";

import Icon from "react-native-vector-icons/dist/FontAwesome";

export default function Inicio() {
  return (
    <View style={Style.continer}>
      <View style={Style.header}>
        <Text style={Style.title}>
          Esy<Text style={Style.title2}>Redorder</Text>
        </Text>

        <View>
          <TouchableOpacity style={Style.sejaPro}>
            <Text>Seja Pro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
