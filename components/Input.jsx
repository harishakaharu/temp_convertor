import { TextInput, View, Text } from "react-native";
import { inputStyle } from "../styles/Input.style";

export default function Input(props) {
  const textChange = (text) => {
    props.onChange(text);
  };
  return (
    <View style={inputStyle.root}>
      <TextInput
        placeholder="Enter Temperature"
        style={inputStyle.inputVal}
        maxLength={3}
        defaultValue={props.defaultValue.toString()}
        onChangeText={textChange}
      ></TextInput>
      <Text style={inputStyle.text}>°{props.convetorVal}</Text>
    </View>
  );
}
