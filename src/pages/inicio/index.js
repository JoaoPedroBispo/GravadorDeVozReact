import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Platform,
  PermissionsAndroid,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import sqlite from "../../classes/sqlite";
import Style from "./style";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Inicio() {
  const navegation = useNavigation();
  const venda = () => {
    navegation.navigate("Venda");
  };
  const ouvir = () => {
    navegation.navigate("Ouvir");
  };
  const inicio = () => {
    navegation.goBack();
  };

  const [frase, setFrase] = useState({
    inicio: "Pronto para começar",
    grav: "Gravando",
  });

  const [tempo, setTempo] = useState({
    recordSecs: 0,
    recordTime: "00:00:00",
  });

  async function onStartRecord() {
    setGravando(true);

    if (Platform.OS === "android") {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log("write external stroage", grants);

        if (
          grants["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.RECORD_AUDIO"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("All required permissions not granted");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setTempo({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
  }

  async function onStopRecor() {
    setGravando(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setTempo({
      recordSecs: 0,
      recordTime: tempo.recordTime,
    });

    setModalVisible(!modalVisible);
  }

  async function SalvarBanco() {
    const date = new Date().toLocaleString();
    console.log("entrou");
    await sqlite.query(
      `INSERT INTO audio (title, data_hora, tamanho, tags, duracao, caminho) VALUES ("${nome}", "${date}", "", "${opcao}", "${tempo.recordTime}", "") `
    );

    console.log(await sqlite.query("SELECT * FROM audio"));
  }

  //
  const [opcao, setOpcao] = useState();
  const [nome, setNome] = useState("");
  const [gravando, setGravando] = useState(false);
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalStar, setModalStar] = useState(false);
  const countries = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];

  const RatingBar = () => {
    return (
      <View style={Style.ratingBarStyle}>
        {maxRating.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <AntDesign
                name={item <= defaultRating ? "star" : "staro"}
                size={40}
                color="#BFCDE0"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={Style.continer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalStar}
        enum="overFullScreen"
        onRequestClose={() => {
          setModalStar(!modalStar);
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
            <Text style={Style.modalText2}>
              Parabéns! Você gravou seu primeiro áudio!
            </Text>
            <View style={Style.contText3}>
              <Text style={Style.modalText3}>
                Nos avalie com 5 estrelas se estiver gostando do aplicativo!
              </Text>
            </View>

            <RatingBar />

            <View style={Style.contButtton2}>
              <TouchableOpacity
                onPress={() => {
                  if (defaultRating >= 4) {
                    console.log(defaultRating);
                  } else {
                    setModalStar(false);
                  }
                }}
              >
                <LinearGradient
                  colors={["#BFCDE0", "#5D5D81"]}
                  style={Style.avaliar}
                >
                  <Text style={Style.avaliarText}>Avaliar</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        enum="overFullScreen"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <Text style={Style.modalText}>Salvar Gravação</Text>
            <TextInput
              value={nome}
              onChangeText={(tex) => {
                setNome(tex);
                console.log(tex);
              }}
              style={Style.input}
              placeholder="Nome"
            ></TextInput>

            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                setOpcao(selectedItem);
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Tag"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={Style.dropdown1BtnStyle}
              buttonTextStyle={Style.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <Entypo
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#3B3355"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={Style.dropdown1BtnTxtStyle}
              rowStyle={Style.dropdown1RowStyle}
              rowTextStyle={Style.dropdown1RowTxtStyle}
            />

            <View style={Style.contButtton}>
              <TouchableOpacity onPress={() => setModalStar(true)}>
                <LinearGradient
                  colors={["#BFCDE0", "#5D5D81"]}
                  style={Style.salvar}
                >
                  <Text style={Style.SalvarText} onPress={SalvarBanco}>
                    Salvar
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <LinearGradient
                  colors={["#5D5D81", "#3B3355"]}
                  style={Style.cancelar}
                >
                  <Text style={Style.cancelarText}>Cancelar</Text>
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
          <Text style={Style.textOuvir} onPress={() => ouvir()}>
            Ouvir
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.cont2}>
        <Text style={Style.numerosCont2}>{tempo.recordTime}</Text>

        <Text style={Style.textCont2}>
          {gravando > 0 ? frase.grav : frase.inicio}
        </Text>
      </View>

      <View style={Style.contMic}>
        <TouchableOpacity onPress={gravando ? onStopRecor : onStartRecord}>
          <LinearGradient
            colors={["#BFCDE0", "#5D5D81"]}
            style={Style.buttonMic}
          >
            {gravando ? (
              <Entypo name="controller-record" size={40} color={"#ff0000"} />
            ) : (
              <FontAwesome name="microphone" size={50} color={"#ffffff"} />
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
