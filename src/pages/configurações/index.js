import { View, Text, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Style from "./style";

export default function Configurações() {
  const navegation = useNavigation();
  const inicio = () => {
    navegation.goBack();
  };
  return (
    <View style={Style.continer}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => inicio()}>
          <Feather name="arrow-left" size={32} style={Style.icon} />
        </TouchableOpacity>
        <Text style={Style.title}>Configurações</Text>
      </View>

      <View style={Style.cont}>
        <Text style={Style.title2}>Geral</Text>
        <View>
          <Text style={Style.text}>Liguagem</Text>
          <Text style={Style.subText}>Português (Brasil)</Text>
        </View>
        <View>
          <Text style={Style.text}>Fonte de áudio</Text>
          <Text style={Style.subText}>Padrão</Text>
        </View>
        <View>
          <Text style={Style.text}>Qualidade da gravação</Text>
          <Text style={Style.subText}>Padrão</Text>
        </View>
        <View>
          <Text style={Style.text}>Taxa de amostragem</Text>
          <Text style={Style.subText}>48 KHz</Text>
        </View>
        <View>
          <Text style={Style.title3}>Avançado</Text>
        </View>
        <View>
          <Text style={Style.text}>Liguagem</Text>
          <Text style={Style.subText}>Português (Brasil)</Text>
        </View>
        <View>
          <Text style={Style.text}>Fonte de áudio</Text>
          <Text style={Style.subText}>Padrão</Text>
        </View>
        <View>
          <Text style={Style.text}>Qualidade da gravação</Text>
          <Text style={Style.subText}>Padrão</Text>
        </View>
        <View>
          <Text style={Style.text}>Taxa de amostragem</Text>
        </View>
      </View>
    </View>
  );
}
