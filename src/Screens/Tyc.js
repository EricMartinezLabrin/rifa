import { Text, StyleSheet, ScrollView, Button, View } from "react-native";
import React from "react";

export default function Tyc(props) {
  const { navigation } = props;

  const goToMain = () => {
    navigation.navigate("Inicio");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tyc</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button title="Ir a Inicio" onPress={goToMain} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    marginBottom: 10,
  },
});
