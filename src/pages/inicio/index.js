import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
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
          <LinearGradient colors={["#BFCDE0", "#5D5D81"]} style={Style.sejaPro}>
            <TouchableOpacity>
              <Text style={Style.sejaProText}>Seja Pro</Text>
            </TouchableOpacity>
          </LinearGradient>
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

      <View style={Style.cont2}>
        <Text style={Style.numerosCont2}>00:00</Text>
        <Text style={Style.textCont2}>Pronto para começar</Text>
      </View>
      <View style={Style.contMic}>
        <LinearGradient colors={["#BFCDE0", "#5D5D81"]} style={Style.buttonMic}>
          <TouchableOpacity>
            <FontAwesome name="microphone" size={50} style={Style.mic} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
