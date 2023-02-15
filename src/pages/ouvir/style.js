import { StyleSheet } from "react-native";
const Style = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    margin: 10,
    color: "#58566e",
    marginTop: 30,
  },

  title: {
    marginTop: 34,
    fontFamily: "SofiaSans-Regular",
    flexDirection: "row",
    fontSize: 24,
    color: "#939fba",
    flex: 1,
  },

  title2: {
    marginTop: 31,
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "bold",
    color: "#3B3355",
  },

  sejaPro: {
    margin: 5,
    marginTop: 30,
    marginRight: 10,
    height: 33,
    width: 89,
    borderRadius: 10,
    align: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  sejaProText: {
    fontSize: 20,
    fontFamily: "SofiaSans-Regular",
    color: "white",
  },

  cont1: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textGravar: {
    left: 70,
    fontSize: 19,
    fontFamily: "SofiaSans-Regular",
    color: "#3B3355",
  },

  textOuvir: {
    right: 70,
    fontSize: 19,
    fontFamily: "SofiaSans-Regular",
    color: "#3B3355",
  },

  risco2: {
    height: 2,
    right: 70,
    marginTop: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#5D5D81",
    backgroundColor: "#5D5D81",
  },

  contAudio: {
    flex: 0.2,
    marginTop: 10,
    margin: 8,
    borderRadius: 5,
  },

  textAudio: {
    color: "#000000",
    fontFamily: "SofiaSans-Regular",
    fontSize: 20,
  },

  subTextCont: {
    flexDirection: "row",
  },

  subText: {
    color: "#000000",
    fontSize: 12,
    opacity: 0.5,
  },

  subText2: {
    color: "#000000",
    fontSize: 12,
    opacity: 0.5,
  },

  subText3: {
    color: "#000000",
    left: 20,
    fontSize: 12,
    opacity: 0.5,
  },

  buttonTag: {
    marginTop: 3,
    width: null,
    height: null,
    borderWidth: 1,
    borderRadius: 3,
    color: "#fff",
    fontFamily: "SofiaSans-Medium",
    backgroundColor: "#3B3355",
    textAlign: "center",
  },

  subText4: {
    color: "#000000",
    marginTop: 3,
    left: 10,
    fontSize: 12,
    opacity: 0.5,
  },

  iconAudio: {
    color: "#3B3355",
    marginTop: -35,
    left: "80%",
  },

  iconAudio2: {
    color: "#3B3355",
    marginTop: -35,
    left: "90%",
  },

  riscoAudio: {
    height: 1,
    marginTop: 5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#BFCDE0",
    backgroundColor: "#BFCDE0",
  },

  contPlayer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  player: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tempoPlayer: {
    color: "white",
  },

  ion: {
    width: 13,
    height: 13,
    marginTop: 2,
    left: 10,
    borderRadius: 100,
    backgroundColor: "white",
  },
  tempoPlayer1: {
    width: 45,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    color: "white",
    borderColor: "white",
    textAlign: "center",
  },

  tempo: {
    width: 230,
    height: 2,
    marginTop: 3,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },

  contPlayer2: {
    height: 90,
    width: 360,

    justifyContent: "center",
    alignItems: "center",
    align: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  play: {
    left: 15,
    color: "white",
  },

  textPlayer: {
    marginRight: 15,
    color: "white",
    fontSize: 20,
  },

  FlatList: {
    flex: 1,
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 330,
    height: 250,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: "#000",
    fontSize: 20,
    top: 25,
    fontFamily: "SofiaSans-Regular",
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#3B3355",
    padding: 10,
    borderRadius: 5,
    width: 260,
    height: 47,
    top: 50,
    fontSize: 18,
    textAlign: "left",
    color: "#3B3355",
  },

  contButtton: {
    flexDirection: "row",
  },

  salvar: {
    height: 42,
    width: 160,
    right: 10,
    top: 90,
    borderRadius: 10,
    align: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  SalvarText: {
    fontFamily: "SofiaSans-Regular",
    color: "white",
    fontSize: 20,
  },

  cancelar: {
    height: 42,
    width: 92,
    top: 90,
    left: 10,
    borderRadius: 10,
    align: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  cancelarText: {
    fontFamily: "SofiaSans-Regular",
    color: "white",
    fontSize: 20,
  },

  dropdown1BtnStyle: {
    width: 100,
    height: 100,
    top: 40,
    backgroundColor: "#FFF",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#3B3355",
    marginBottom: 30,
    opacity: 1,
  },
  dropdown1BtnTxtStyle: {
    color: "#000",
    textAlign: "left",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdown1RowTxtStyle: {
    color: "#000",
    left: 10,
    textAlign: "left",
  },

  centeredView2: {
    flex: 1,
    width: 360,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    left: "95%",
    top: -10,
    position: "absolute",
  },
  icon2: {
    color: "white",
  },

  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  selecionado: {
    borderWidth: 2,
    color: "black",
  },
});

export default Style;
