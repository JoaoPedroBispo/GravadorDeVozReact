import React from "react";
import Style from "./style";

import { View, Text } from "react-native";

export function Item({ data }) {
  return (
    <View style={Style.contAudio}>
      <Text style={Style.textAudio}>Teste.mp4</Text>
      <View style={Style.subTextCont}>
        <Text style={Style.subText}>12/01/2023</Text>
        <Text style={Style.subText2}>14:30</Text>
        <Text style={Style.subText3}>46,21kB</Text>
      </View>
      <View style={Style.subTextCont}>
        <Text style={Style.buttonEstudo}>Estudo</Text>
        <Text style={Style.subText4}>00:45</Text>
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
