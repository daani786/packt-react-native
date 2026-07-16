import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  // dont set width in pixel
  // use percentage, dimensions or libraries
  // console.log('screen', Dimensions.get("screen"));
  // console.log('window', Dimensions.get("window"));
  const PHONE_WIDTH = Dimensions.get("window").width;
  const PHONE_HEIGHT = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
        }}
      >
        <View
          style={{ backgroundColor: "red", width: PHONE_WIDTH, height: PHONE_HEIGHT }}
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
