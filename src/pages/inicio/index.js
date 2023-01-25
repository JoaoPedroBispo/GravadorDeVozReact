import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Style from "./style";

export default function Inicio() {
  const navegation = useNavigation();
  const venda = () => {
    navegation.navigate("Venda");
  };

  const gravar = () => {
    navegation.navigate("Ouvir");
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Style.continer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        enum="overFullScreen"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.modal}></View>
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <Text style={Style.modalText}>Salvar Gravação</Text>
            <TextInput
              maxLength={14}
              style={Style.input}
              placeholder="Nome"
            ></TextInput>

            <View style={Style.contButtton}>
              <TouchableOpacity onPress={() => venda()}>
                <LinearGradient
                  colors={["#BFCDE0", "#5D5D81"]}
                  style={Style.salvar}
                >
                  <Text style={Style.sejaProText}>Salva</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => venda()}>
                <LinearGradient
                  colors={["#5D5D81", "#3B3355"]}
                  style={Style.cancelar}
                >
                  <Text style={Style.sejaProText}>Cancelar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={Style.header}>
        <TouchableOpacity onPress={() => navegation.openDrawer()}>
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
          <Text style={Style.textGravar}>Gravar</Text>
          <View style={Style.risco1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={Style.textOuvir} onPress={() => gravar()}>
            Ouvir
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.cont2}>
        <Text style={Style.numerosCont2}>00:00</Text>
        <Text style={Style.textCont2}>Pronto para começar</Text>
      </View>

      <View style={Style.contMic}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <LinearGradient
            colors={["#BFCDE0", "#5D5D81"]}
            style={Style.buttonMic}
          >
            <FontAwesome name="microphone" size={50} style={Style.mic} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
