import { View, Text } from "react-native";
import { viewStyle } from "../styles/View.style";

export default function ShowTemperatur(props) {
  return (
    <View>
      <Text style={viewStyle.main}>
        {props.tempVal} {props.convertString === "C" ? "Fahrenheit" : "Celsius"}
      </Text>
    </View>
  );
}
