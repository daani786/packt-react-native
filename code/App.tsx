import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.text}>Welcome to my first app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // area of screen that the component should take up
    backgroundColor: 'pink',
    alignItems: 'center', // horizontal alignment
    justifyContent: 'center' // vertical alignment
  },
  text: {
    color: 'red'
  }
});
