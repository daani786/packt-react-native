import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(20);
  const increaseValue = () => {
    setState(prevState => prevState + 1);
  };
  const decreaseValue = () => {
    setState(prevState => prevState - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Hello World</Text>
        <Button title="Decrease" onPress={decreaseValue}></Button>
        <Text style={{fontSize: 100}}>{state}</Text>
        <Button title="Increase" onPress={increaseValue}></Button>
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
