import { StyleSheet } from "react-native";
const Style = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    margin: 10,
    color: "#58566e",
    marginTop: 28,
  },

  title: {
    marginTop: 31,
    flexDirection: "row",
    fontSize: 21,
    color: "#939fba",
    flex: 1,
  },

  title2: {
    marginTop: 31,
    flexDirection: "row",
    fontSize: 21,
    fontWeight: "bold",
    color: "#3B3355",
  },

  sejaPro: {
    margin: 5,
    marginTop: 28,
    marginRight: 10,
    height: 35,
    width: 80,
    borderRadius: 10,
    align: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  sejaProText: {
    color: "white",
  },

  cont1: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textGravar: {
    left: 70,
    fontSize: 18,
    color: "#3B3355",
  },

  textOuvir: {
    right: 70,
    fontSize: 18,
    color: "#3B3355",
  },

  risco1: {
    height: 2,
    left: 70,
    marginTop: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#5D5D81",
    backgroundColor: "#5D5D81",
  },

  cont2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  numerosCont2: {
    fontSize: 45,
    color: "#3B3355",
  },

  textCont2: {
    fontSize: 17,
    color: "#3B3355",
    opacity: 0.5,
  },

  contMic: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonMic: {
    height: 90,
    width: 90,
    borderRadius: 100,
    backgroundColor: "#5D5D81",
    justifyContent: "center",
    alignItems: "center",
    align: "center",
  },

  mic: {
    color: "white",
  },

  centeredView: {
    flex: 1,

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
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
    fontSize: 18,
    top: 15,
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#3B3355",
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 47,
    top: 30,
    color: "#3B3355",
  },

  contButtton: {
    flexDirection: "row",
  },

  salvar: {
    height: 35,
    width: 150,
    right: 10,
    top: 125,
    borderRadius: 10,
    align: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },

  cancelar: {
    height: 35,
    width: 100,
    top: 125,
    left: 10,
    borderRadius: 10,
    align: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D5D81",
  },
});

export default Style;
