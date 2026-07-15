import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.text}>Text 2</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>Text 3</Text>
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
  text: {
    fontSize: 50,
  },
  view1: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'aqua',
  }
});
