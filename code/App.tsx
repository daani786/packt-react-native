import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Hello, World</Text>
      <Text style={styles.subTitleText} numberOfLines={5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <Text
          style={styles.redText}
          onPress={() => Alert.alert("You pressed the text!")}
        >
          Press Here 2
        </Text>
        Lorem Ipsum has been the industry's standard dummy text ever since 1966,
        when designers at Letraset and James Mosley, the librarian at St Bride
        Printing Library in London, took a 1914 Cicero translation and scrambled
        it to make dummy text for Letraset's Body Type sheets. It has survived
        not only many decades, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised thanks to these
        sheets and more recently with desktop publishing software like Aldus
        PageMaker and Microsoft Word including versions of Lorem Ipsum.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // area of screen that the component should take up
    backgroundColor: "white",
  },
  titleText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "blue",
  },
  subTitleText: {
    fontSize: 20,
    textAlign: "justify",
  },
  redText: {
    color: "red",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
