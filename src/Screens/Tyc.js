import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Tyc() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tyc</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
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
