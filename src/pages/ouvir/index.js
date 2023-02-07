import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  SelectDropdown,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Item } from "./function";
import React from "react";
import sqlite from "../../classes/sqlite";
import { useState, useEffect } from "react";
import Style from "./style";

export default function Ouvir() {
  const [gravarState, setGravarState] = useState(false);
  const [playerState, setPlayerState] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [list, setList] = useState([]);

  const navegation = useNavigation();
  const venda = () => {
    navegation.navigate("Venda");
  };
  const inicio = () => {
    navegation.goBack();
  };

  function toggleMusicPlay() {
    setPlayerState(!playerState);
  }

  function renderItem({ item }) {
    return <Item data={item} />;
  }

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query("SELECT * FROM audio");

      setList(data);
    }

    getData();
  }, []);
  return (
    <View style={Style.continer}>
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
              onPress={() => setModalStar(false)}
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
          <Text style={Style.textGravar} onPress={() => inicio()}>
            Gravar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Style.textOuvir}>Ouvir</Text>
          <View style={Style.risco2}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={Style.FlatList}
      />

      <View style={Style.contPlayer}>
        <LinearGradient colors={["#BFCDE0", "#5D5D81"]}>
          <View style={Style.player}>
            <Text style={Style.tempoPlayer1}>00:00</Text>
            <View style={Style.ion}></View>
            <View style={Style.tempo}></View>
            <Text style={Style.tempoPlayer}>00:45</Text>
          </View>

          <View style={Style.contPlayer2}>
            <TouchableOpacity onPress={() => setModalEdit(true)}>
              <SimpleLineIcons name="loop" size={20} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="banckward" size={25} style={Style.play} />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleMusicPlay}>
              {playerState ? (
                <AntDesign name="pausecircle" size={65} style={Style.play} />
              ) : (
                <AntDesign name="play" size={65} style={Style.play} />
              )}
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
