import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native☠</Text>

      <Text style={styles.text}>I will be a app developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5511c4",
  },
  text: {
    fontSize: 31,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#af0d0d",
    padding: 20,
    textAlign: "center",
    margin: 15,
  },
});
