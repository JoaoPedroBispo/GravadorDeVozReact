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
    color: "#3B3355",
  },

  textOuvir: {
    color: "#3B3355",
  },
});

export default Style;
