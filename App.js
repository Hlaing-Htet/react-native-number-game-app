import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let sereen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    sereen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e163c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/iamges/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {sereen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
