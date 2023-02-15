import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Item } from "./function";
import React from "react";
import sqlite from "../../classes/sqlite";
import { useState, useEffect } from "react";
import Style from "./style";

export default function Ouvir() {
  const [playerState, setPlayerState] = useState(false);
  const [list, setList] = useState([]);
  const [atualiza, setAtualiza] = useState(false);

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
    return <Item data={item} setAtualiza={setAtualiza} />;
  }

  useEffect(() => {
    async function getData() {
      const data = await sqlite.query("SELECT * FROM audio");
      setList(data);
    }
    getData();
  }, [atualiza]);

  return (
    <View style={Style.continer}>
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
