import { StyleSheet } from "react-native";

export const inputStyle = StyleSheet.create({
  root: { alignSelf: "stretch", justifyContent: "center" },

  inputVal: {
    backgroundColor: "white",
    borderRadius: 20,
    color: "black",
    paddingLeft: 25,
  },
  text: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 20,
    fontSize: 20,
  },
});
