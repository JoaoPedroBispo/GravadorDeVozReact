import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import Style from "./style";

export default function Venda() {
  const navegation = useNavigation();
  const navegar = () => {
    navegation.navigate("Inicio");
  };

  return (
    <View style={Style.continer}>
      <ImageBackground
        source={require("../../assets/woman.png")}
        style={Style.img}
      >
        <TouchableOpacity style={Style.buttonIcon} onPress={() => navegar()}>
          <AntDesign name="close" size={25} style={Style.icon} />
        </TouchableOpacity>

        <LinearGradient
          colors={["transparent", "white"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={Style.linearGradient}
        >
          <View style={Style.cont1}>
            <LinearGradient
              colors={["#BFCDE0", "#5D5D81"]}
              style={Style.buttonMic}
            >
              <FontAwesome name="microphone" size={20} style={Style.mic} />
            </LinearGradient>
            <Text style={Style.title}>
              Easy<Text style={Style.title2}>Redorder</Text>
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={Style.items}>
        <View style={Style.item}></View>
      </View>
    </View>
  );
}
