import { View, Text, Linking, StyleSheet } from "react-native";
import React, { useEffect } from "react";

export default function PagarPendientes() {
  useEffect(() => {
    const openWhatsApp = async () => {
      const phoneNumber = "5218333457263"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
      const message = "Quiero pagar un número que tengo reservado."; // Reemplaza con el mensaje que deseas enviar

      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

      try {
        await Linking.openURL(url);
      } catch (error) {
        console.error("Error al abrir WhatsApp:", error);
      }
    };

    openWhatsApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Estas siendo redirigido para terminar tu pago
      </Text>
      <Text style={styles.content}>
        Si no eres redirigido automaticamente puedes enviar un whats app al +521
        833 345 7263
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
});
