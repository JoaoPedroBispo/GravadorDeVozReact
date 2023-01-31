import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Style = StyleSheet.create({
  title: {
    marginTop: 5,
    flexDirection: "row",
    fontFamily: "SofiaSans-Regular",
    fontSize: 35,

    color: "#939fba",
    flex: 1,
  },

  title2: {
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "SofiaSans-Regular",
    color: "#3B3355",
  },

  icon: {
    left: 5,
    color: "#3B3355",
  },

  text: {
    fontSize: 16,
    right: 5,
    fontFamily: "SofiaSans-Regular",
    color: "#3B3355",
  },

  textPro: {
    fontSize: 17,
    right: 15,
    fontFamily: "SofiaSans-Regular",
    color: "#BFCDE0",
  },

  sejaPro: {
    borderRadius: 5,
    height: 25,
    width: 35,
  },

  sejaProText: {
    color: "#3B3355",
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "SofiaSans-Regular",
    top: 2,
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
});

export default Style;
