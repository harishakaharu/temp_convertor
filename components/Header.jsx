import { TouchableOpacity, Text, View } from "react-native";
import { headerStyle } from "../styles/Header.style";
import Input from "./Input";
import { useState } from "react";
import ShowTemperatur from "./ShowTemperatur";

export default function Header(props) {
  const [input, setInput] = useState(0);
  const [changeTemp, setChangeTemp] = useState(32);
  const [convertString, setConvertString] = useState("C");
  const tempManagement = (text) => {
    setInput(text);
    if (convertString === "C") {
      setChangeTemp(text * 1.8 + 32);
      text < 15 ? props.temperature("cold") : props.temperature("hot");
    } else {
      setChangeTemp((text - 32) / 1.8);
    }
  };
  const changeConvesion = () => {
    convertString === "C" ? setConvertString("F") : setConvertString("C");
    if (convertString === "F") {
      setChangeTemp(input * 1.8 + 32);
      input < 15 ? props.temperature("cold") : props.temperature("hot");
    } else {
      setChangeTemp((input - 32) / 1.8);
    }
  };
  return (
    <View style={headerStyle.header}>
      <ShowTemperatur tempVal={changeTemp} convertString={convertString} />
      <Input
        defaultValue={input}
        onChange={tempManagement}
        convetorVal={convertString}
      />
      <TouchableOpacity style={headerStyle.button} onPress={changeConvesion}>
        <Text style={headerStyle.text}>
          Convert to {convertString === "C" ? "Fahrenheit" : "Celsius"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
