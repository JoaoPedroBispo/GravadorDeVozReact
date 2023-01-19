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
        style={{ height: 320, width: 360 }}
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
        <View style={Style.item}></View>
        <View style={Style.item}></View>
        <View style={Style.item}></View>
      </View>

      <View style={Style.items2}>
        <TouchableOpacity>
          <View style={Style.item1}>
            <Text style={Style.preçoItem1}>4,99</Text>
            <Text style={Style.textItem1}>Mensal</Text>
          </View>
          <View style={Style.circulo1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Style.item2}>
            <Text style={Style.preçoItem1}>15,99</Text>
            <Text style={Style.textItem1}>Anual</Text>
          </View>
          <View style={Style.circulo1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Style.item3}>
            <Text style={Style.promoItem3}>39,99</Text>
            <Text style={Style.preçoItem3}>29,99</Text>
            <Text style={Style.textItem3}>Vitalício</Text>
          </View>
          <View style={Style.circulo3}></View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navegar()}>
        <LinearGradient colors={["#BFCDE0", "#5D5D81"]} style={Style.button}>
          <Text style={Style.textButton}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={Style.subText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}
