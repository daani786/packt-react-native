import { Alert, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, World</Text>
      <Image 
        source={require("./assets/splash-icon.png")}
        style={styles.image1}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image2}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image2}
        blurRadius={10}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image2}
        borderRadius={100}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // area of screen that the component should take up
    backgroundColor: "white",
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 200,
    height: 200,
  }
});
