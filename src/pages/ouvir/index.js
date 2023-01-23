import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Style from "./style";

export default function Ouvir() {
  const navegation = useNavigation();
  const venda = () => {
    navegation.navigate("Venda");
  };
  const inicio = () => {
    navegation.goBack();
  };
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
          <TouchableOpacity onPress={() => venda()}>
            <LinearGradient
              colors={["#BFCDE0", "#5D5D81"]}
              style={Style.sejaPro}
            >
              <Text style={Style.sejaProText}>Seja Pro</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Style.cont1}>
        <TouchableOpacity>
          <Text style={Style.textGravar} onPress={() => inicio()}>
            Gravar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Style.textOuvir}>Ouvir</Text>
          <View style={Style.risco2}></View>
        </TouchableOpacity>
      </View>

      <View style={Style.contAudio}>
        <Text style={Style.textAudio}>Teste.mp4</Text>
        <View style={Style.subTextCont}>
          <Text style={Style.subText}>12/01/2023</Text>
          <Text style={Style.subText2}>14:30</Text>
          <Text style={Style.subText3}>46,21kb</Text>
        </View>

        <View style={Style.subTextCont}>
          <Text style={Style.buttonEstudo}>Estudo</Text>
          <Text style={Style.subText4}>00:45</Text>
        </View>

        <TouchableOpacity>
          <Feather name="scissors" size={25} style={Style.iconAudio} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={25}
            style={Style.iconAudio2}
          />
        </TouchableOpacity>

        <View style={Style.riscoAudio}></View>
      </View>

      <View style={Style.contPlayer}>
        <LinearGradient colors={["#BFCDE0", "#5D5D81"]}>
          <View style={Style.player}>
            <Text style={Style.tempoPlayer1}>00:00</Text>
            <View style={Style.ion}></View>
            <View style={Style.tempo}></View>
            <Text style={Style.tempoPlayer}>00:45</Text>
          </View>

          <View style={Style.contPlayer2}>
            <TouchableOpacity>
              <SimpleLineIcons name="loop" size={20} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="banckward" size={25} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="play" size={65} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="forward" size={25} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Style.textPlayer}>1x</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
