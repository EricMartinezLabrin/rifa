import { Text, StyleSheet, ScrollView, Button, View } from "react-native";
import React from "react";
import { getTycApi } from "../Api/backend";

export default function Tyc(props) {
  const { navigation } = props;
  const [tyc, setTyc] = React.useState(null);

  const getTyc = async () => {
    const response = await getTycApi();
    setTyc(response?.tyc);
  };
  getTyc();

  const goToMain = () => {
    navigation.navigate("Inicio");
  };

  console.log(tyc);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Terminos y Condiciones</Text>
        <Text style={styles.content}>{tyc}</Text>
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
