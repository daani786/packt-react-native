import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Hello World</Text>
      </View>
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Button title="Show Modal" onPress={() => setModalVisible(true)}></Button>
        <Modal visible={modalVisible} animationType="slide">
          <Text style={{fontSize: 50}}>Modal is opened</Text>
          <Button title="Hide Modal" onPress={() => setModalVisible(false)}></Button>
        </Modal>
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
