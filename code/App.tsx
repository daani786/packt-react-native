import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={{
          backgroundColor: "gold",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{
          backgroundColor: "white",
          width: 200,
          height: 200,
          borderRadius: 15,
        }}>
          <Text style={styles.title}>Hello World</Text>
        </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // area of screen that the component should take up
    backgroundColor: "white",
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
