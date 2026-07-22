import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  console.log("user typed text: ", text);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <View style={{
        alignItems: "center",
      }}>
        <TextInput style={{ 
              height: 60,
              width: "80%",
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "grey",
            }}
            placeholder="Enter Your Name" 
            keyboardType="default"
            // secureTextEntry={true}
            // multiline={true}
            // editable={false}
            value={text}
            onChangeText={setText}
        />
        <Text style={styles.title}>Welcome {text}</Text>
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
