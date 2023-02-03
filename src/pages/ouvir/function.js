import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "./style";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export function Navegar(navigation) {
  navigation.navigate("Principal");
}

export function Item({ data }) {
  return (
    <View style={Style.contAudio}>
      <Text style={Style.textAudio}>{data.title}</Text>
      <View style={Style.subTextCont}>
        <Text style={Style.subText}>{data.hora}</Text>
        <Text style={Style.subText2}></Text>
        <Text style={Style.subText3}>{data.tamanho}</Text>
      </View>

      <View style={Style.subTextCont}>
        <Text style={Style.buttonTag}>{data.tags}</Text>
        <Text style={Style.subText4}>{data.duracao}</Text>
      </View>

      <TouchableOpacity>
        <Feather name="scissors" size={25} style={Style.iconAudio} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={25} style={Style.iconAudio2} />
      </TouchableOpacity>

      <View style={Style.riscoAudio}></View>
    </View>
  );
}
