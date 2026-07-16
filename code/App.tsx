import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center", // for vertical alignment
          alignItems: "center", // for horizontal alignment
        }}
      >
        <View
          style={{ backgroundColor: "red", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "pink", width: 100, height: 100 }}
        ></View>
        <View
          style={{ backgroundColor: "green", width: 100, height: 100 }}
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
