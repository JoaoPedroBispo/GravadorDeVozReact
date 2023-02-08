import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import Style from "./style";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export function Navegar(navigation) {
  navigation.navigate("Principal");
}

export function Item({ data }) {
  const [modalEdit, setModalEdit] = useState(false);
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

      <TouchableOpacity onPress={() => setModalEdit(true)}>
        <Ionicons name="ellipsis-vertical" size={25} style={Style.iconAudio2} />
      </TouchableOpacity>

      <View style={Style.riscoAudio}></View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEdit}
        enum="overFullScreen"
        onRequestClose={() => {
          setModalEdit(!modalEdit);
        }}
      >
        <View style={Style.centeredView2}>
          <View style={Style.modalView}>
            <TouchableOpacity
              style={Style.buttonIcon}
              onPress={() => setModalEdit(false)}
            >
              <LinearGradient
                colors={["#BFCDE0", "#5D5D81"]}
                style={Style.closeButton}
              >
                <AntDesign name="close" size={20} style={Style.icon2} />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={Style.modalText}>Propriedades</Text>
            <TextInput
              onChangeText={(tex) => {
                setNome(tex);
                console.log(tex);
              }}
              style={Style.input}
              placeholder="Nome"
            ></TextInput>

            <View style={Style.contButtton}>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#BFCDE0", "#5D5D81"]}
                  style={Style.salvar}
                >
                  <Text style={Style.SalvarText}>Editar</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalEdit(false)}>
                <LinearGradient
                  colors={["#5D5D81", "#3B3355"]}
                  style={Style.cancelar}
                >
                  <MaterialIcons name="delete" size={25} style={Style.icon2} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
