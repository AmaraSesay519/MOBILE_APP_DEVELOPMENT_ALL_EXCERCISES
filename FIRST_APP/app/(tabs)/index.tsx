import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container_body}>
          <Text style={styles.text}>Welcome to React Native☠</Text>

          <Text style={styles.text}>I will be a app developer</Text>
          <Text style={styles.text}>I will be a app developer</Text>
          <Text style={styles.text}>I will be a app developer</Text>
          <Text style={styles.text}>I will be a app developer</Text>
          <Text style={styles.text}>I will be a app developer</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5e20c2",
    borderWidth: 5,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  container_body: {
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderWidth: 5,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 20,
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
  sub_cont: {
    color: "green",
    fontSize: 16,
    borderRadius: 10,
  },
});
