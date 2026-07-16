import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, s, vs } from 'react-native-size-matters';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            width: scale(300),
            height: verticalScale(600),
          }}
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
