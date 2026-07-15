import { Alert, StyleSheet, Text, Image, Button, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const onButtonPress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // horizontal={true}
        contentContainerStyle={{ alignItems: "center", backgroundColor: "red" }}
      >
        <Text style={styles.title}>My App</Text>
        <Image 
          source={require("./assets/splash-icon.png")}
          style={styles.image1}
        />
        <Pressable onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            borderRadius={100}
          />
        </Pressable>
        <TouchableOpacity onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            borderRadius={100}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            borderRadius={100}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onButtonPress}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image2}
            borderRadius={100}
          />
        </TouchableOpacity>

        <Button 
          title="Press on Me" 
          onPress={onButtonPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // area of screen that the component should take up
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
