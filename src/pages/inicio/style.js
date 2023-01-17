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
    fontSize: 18,
    color: "#BFCDE0",
    flex: 1,
  },

  title2: {
    marginTop: 31,
    flexDirection: "row",
    fontSize: 18,
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
    marginTop: 30,
    margin: 65,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textGravar: {
    fontSize: 18,
    color: "#3B3355",
  },

  textOuvir: {
    fontSize: 18,
    color: "#3B3355",
  },

  cont2: {
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
  },

  numerosCont2: {
    fontSize: 45,
    color: "#3B3355",
  },

  textCont2: {
    marginTop: 5,
    fontSize: 17,
    color: "#3B3355",
    opacity: 0.5,
  },

  contMic: {
    marginTop: 40,
    alignItems: "center",
  },

  buttonMic: {
    height: 90,
    width: 90,
    marginTop: 100,
    borderRadius: 100,
    backgroundColor: "#5D5D81",
    justifyContent: "center",
    alignItems: "center",
    align: "center",
  },

  mic: {
    color: "white",
  },
});

export default Style;
