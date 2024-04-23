import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  header: { alignItems: "center", justifyContent: "space-evenly", height: 450 },
  button: {
    borderRadius: 25,
    backgroundColor: "#7cb9e8",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: { color: "white", fontWeight: "bold" },
});
