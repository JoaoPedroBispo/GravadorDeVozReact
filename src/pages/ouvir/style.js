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

  risco2: {
    height: 2,
    right: 70,
    marginTop: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#5D5D81",
    backgroundColor: "#5D5D81",
  },

  contPlayer: {
    flex: 1,
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
});

export default Style;
