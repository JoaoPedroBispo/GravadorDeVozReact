import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Item } from "./function";
import React from "react";
import sqlite from "../../classes/sqlite";
import { useState, useEffect } from "react";
import Style from "./style";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import _ from "lodash";
import { Slider } from "@miblanchard/react-native-slider";

export default function Ouvir() {
  const [list, setList] = useState([]);
  const [cliqueLista, setCliqueLista] = useState(false);
  const [atualiza, setAtualiza] = useState(false);
  const [recording, setRecording] = useState(false);
  const [positionSlide, setPositionSlide] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: "00:00",
    duration: "00:00",
  });

  const navegation = useNavigation();
  const venda = () => {
    navegation.navigate("Venda");
  };
  const inicio = () => {
    navegation.goBack();
  };

  //////Muda o estdado de play para stop/////

  function TouchPlay() {
    setRecording(!recording);
  }

  /////Exibir é o TouchClique/////

  function TouchClique() {
    setCliqueLista(!cliqueLista);
  }

  function renderItem({ item }) {
    return (
      <Item
        data={item}
        setAtualiza={setAtualiza}
        TouchClique={TouchClique}
        setCliqueLista={setCliqueLista}
        cliqueLista={cliqueLista}
      />
    );
  }

  async function idNext() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index + 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  async function idBack() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index - 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  async function onStartPlay() {
    setRecording(true);
    const msg = await AudioRecorderPlayer.startPlayer();
    console.log(msg);
    AudioRecorderPlayer.addPlayBackListener((e) => {
      setPositionSlide({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: AudioRecorderPlayer.mmss(
          Math.floor(e.currentPosition / 1000)
        ),
        duration: AudioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
      });
      return;
    });
  }

  async function onPausePlay() {
    setRecording(false);
    await AudioRecorderPlayer.pausePlayer();
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
          Easy<Text style={Style.title2}>Recorder</Text>
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
      {cliqueLista ? (
        <View style={Style.contPlayer}>
          <LinearGradient colors={["#BFCDE0", "#5D5D81"]}>
            <View style={Style.player}>
              <Text style={Style.tempoPlayer1}>{positionSlide.playTime}</Text>

              <Slider
                containerStyle={{
                  flex: 1,
                  marginRight: "6%",
                  marginLeft: "6%",
                }}
                thumbTintColor="#FFFFFF"
                value={positionSlide.currentPositionSec}
                minimumValue={1}
                maximumValue={positionSlide.currentDurationSec}
                step={1}
                trackClickable={true}
                maximumTrackTintColor="#e9f0ef"
                minimumTrackTintColor="#fff"
              />
              <Text style={Style.tempoPlayer}>{positionSlide.playTime}</Text>
            </View>

            <View style={Style.contPlayer2}>
              <TouchableOpacity style={Style.next} onPress={idBack}>
                <AntDesign name="banckward" size={30} style={Style.play} />
              </TouchableOpacity>

              <TouchableOpacity onPress={recording ? onPausePlay : onStartPlay}>
                {recording ? (
                  <Foundation name="pause" size={65} style={Style.play} />
                ) : (
                  <AntDesign name="play" size={65} style={Style.play} />
                )}
              </TouchableOpacity>

              <TouchableOpacity style={Style.next2} onPress={idNext}>
                <AntDesign name="forward" size={30} style={Style.play} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      ) : null}
    </View>
  );
}
