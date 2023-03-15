import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import Style from "./style";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import sqlite from "../../classes/sqlite";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Slider } from "@miblanchard/react-native-slider";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export function Navegar(navigation) {
  navigation.navigate("Principal");
}

const borderWidth = 4;
const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: "red",
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: "grey",
    borderWidth,
    left: -borderWidth / 2,
  },
});

const SliderContainer = ({
  caption,
  children,
  sliderValue,
  trackMarks,
  vertical,
}) => {
  const [value, setValue] = useState(sliderValue);
  let renderTrackMarkComponent;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={Style.sliderContainer}>
      <View style={Style.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(" - ") : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};

export function Item({ data, setAtualiza, setCliqueLista, cliqueLista }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalEditcut, setModalEditcut] = useState(false);
  const [recording, setRecording] = useState(false);
  const [nome, setNome] = useState("");

  function TouchPlay() {
    setRecording(!recording);
  }

  async function update(id_audio) {
    await sqlite.query(
      `UPDATE audio SET title="${nome}" WHERE id_audio = ${id_audio}`
    );
    setAtualiza(await sqlite.query(`SELECT * FROM audio`));
    setModalEdit(false);
  }

  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audio WHERE id_audio = ${id_audio}`);

    setAtualiza(new Date());
    setModalEdit(false);
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

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCliqueLista(data.id_audio)}
        style={[
          Style.backg2,
          cliqueLista === data.id_audio ? Style.backg : false,
        ]}
      >
        <View style={Style.contAudio}>
          <Text style={Style.textAudio}>{data.title}</Text>
          <View style={Style.subTextCont}>
            <Text style={Style.subText}>{data.data}</Text>
            <Text style={Style.subText2}>{data.hora}</Text>
            <Text style={Style.subText3}>{data.tamanho}</Text>
          </View>

          <View style={Style.subTextCont}>
            <Text style={Style.buttonTag}>{data.tags}</Text>
            <Text style={Style.subText4}>{data.duracao}</Text>
          </View>

          <TouchableOpacity onPress={() => setModalEditcut(true)}>
            <Feather name="scissors" size={25} style={Style.iconAudio} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalEdit(true)}>
            <Ionicons
              name="ellipsis-vertical"
              size={25}
              style={Style.iconAudio2}
            />
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
              <View style={Style.modalViewEdit}>
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
                  }}
                  style={Style.input}
                  placeholder="Nome"
                ></TextInput>

                <View style={Style.contButtton}>
                  <TouchableOpacity onPress={() => update(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={Style.salvar}
                    >
                      <Text style={Style.SalvarText}>Editar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteId(data.id_audio)}>
                    <LinearGradient
                      colors={["#5D5D81", "#3B3355"]}
                      style={Style.cancelar}
                    >
                      <MaterialIcons
                        name="delete"
                        size={25}
                        style={Style.icon2}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalEditcut}
            enum="overFullScreen"
            onRequestClose={() => {
              setModalEditcut(!modalEditcut);
            }}
          >
            <View style={Style.centeredView2}>
              <View style={Style.modalView}>
                <TouchableOpacity
                  style={Style.buttonIcon}
                  onPress={() => setModalEditcut(false)}
                >
                  <LinearGradient
                    colors={["#BFCDE0", "#5D5D81"]}
                    style={Style.closeButton}
                  >
                    <AntDesign name="close" size={20} style={Style.icon2} />
                  </LinearGradient>
                </TouchableOpacity>
                <SliderContainer
                  caption="................................................................................."
                  sliderValue={[6, 18]}
                >
                  <Slider
                    animateTransitions
                    maximumTrackTintColor="#3B3355"
                    maximumValue={20}
                    minimumTrackTintColor="#3B3355"
                    minimumValue={4}
                    step={1}
                    thumbTintColor="#BFCDE0"
                  />
                </SliderContainer>

                <View style={Style.contButtton}>
                  <View style={Style.contPlayer3}>
                    <TouchableOpacity
                      onPress={recording ? onPausePlay : onStartPlay}
                    >
                      {recording ? (
                        <Foundation
                          name="pause"
                          size={65}
                          style={Style.playmodal}
                        />
                      ) : (
                        <Entypo
                          name="controller-play"
                          size={65}
                          style={Style.playmodal2}
                        />
                      )}
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={Style.salvar}
                    >
                      <Text style={Style.SalvarText}>Cortar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalEditcut(false)}>
                    <LinearGradient
                      colors={["#5D5D81", "#3B3355"]}
                      style={Style.cancelar}
                    >
                      <Text style={Style.SalvarText}>Voltar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
    </View>
  );
}
