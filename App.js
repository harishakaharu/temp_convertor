import { appStyle } from "./styles/App.style";
import { ImageBackground, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header";
import hot from "./assets/sunny.jpg";
import cold from "./assets/cold.jpg";
import { useState } from "react";
export default function App() {
  const [temp, setTemp] = useState("hot");
  return (
    <ImageBackground
      source={temp === "hot" ? hot : cold}
      style={appStyle.backgroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.main}>
          <Header temperature={setTemp} />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
