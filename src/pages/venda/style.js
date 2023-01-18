import { StyleSheet } from "react-native";
const Style = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  img: {
    height: 340,
    width: 360,
  },

  buttonIcon: {
    marginTop: 30,
    height: 35,
    width: 35,
    left: 310,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    align: "center",
    borderColor: "white",
  },
  icon: {
    color: "white",
  },

  linearGradient: {
    flex: 1,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cont1: {
    marginTop: 190,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    flexDirection: "row",
    fontSize: 30,
    color: "#BFCDE0",
  },

  title2: {
    flexDirection: "row",
    fontSize: 30,
    fontWeight: "bold",
    color: "#3B3355",
  },

  buttonMic: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: "#5D5D81",
    justifyContent: "center",
    alignItems: "center",
    align: "center",
  },

  mic: {
    color: "white",
  },

  items: {
    alignItems: "center",
    flexDirection: "column",
  },

  item: {
    height: 50,
    width: 50,
    marginTop: 30,
    backgroundColor: "#D9D9D9",
  },
});

export default Style;
