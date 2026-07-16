import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ backgroundColor: "red", width: 90, height: 90 }}
        ></View>
        <View
          style={{ backgroundColor: "green", width: 90, height: 90, top: 100, left: 20, position: "relative" }}
        ></View>
        <View
          style={{ backgroundColor: "gold", width: 90, height: 90 }}
        ></View>
      </View>
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
