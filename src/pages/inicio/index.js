import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import modalStar from "./function";
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
  const inicio = () => {
    navegation.goBack();
  };

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
            <TouchableOpacity style={Style.buttonIcon}>
              <LinearGradient
                colors={["#BFCDE0", "#5D5D81"]}
                style={Style.closeButton}
              >
                <AntDesign name="close" size={20} style={Style.icon} />
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
              maxLength={14}
              style={Style.input}
              placeholder="Nome"
            ></TextInput>

            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
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
                  <Text style={Style.SalvarText}>Salvar</Text>
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
