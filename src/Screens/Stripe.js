import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

export default function Stripe() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Completa tu Pago Usando Stripe</Text>
        <Text style={styles.disclaimer}>
          Todos tus datos son usados de forma segura por los servicios de Stripe{" "}
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Número de tarjeta"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de vencimiento (MM/AA)"
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CVC"
            value={cvc}
            onChangeText={(text) => setCvc(text)}
          />
          <Button
            title="Enviar"
            onPress={console.log("comprar")}
            color="#0000FF"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  subContainer: {
    maxWidth: 900,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  disclaimer: {
    marginBottom: 20,
  },
});
