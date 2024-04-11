import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Linking,
} from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";

export default function Register(props) {
  const { navigation } = props;
  const { selectedNumber } = props.route.params;
  const goToStripe = () => {
    navigation.navigate("Stripe");
  };
  const goToWhatsApp = () => {
    Linking.openURL(
      "https://wa.me/5215555555555?text=Hola,%20me%20gustaría%20comprar%20el%20número%20" +
        selectedNumber
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Estás comprando el número {selectedNumber}
        </Text>
        <Text style={styles.subtitle}>
          Para terminar completa los siguientes datos, estos serán utilizados
          para entregarte el premio en el caso de ser ganador. El número solo
          sera reservado por 48 horas para que hagas tu pago, luego de este
          tiempo el número será liberado para que otra persona pueda comprarlo.
        </Text>
        <View style={styles.form}>
          <View style={styles.form2Field}>
            <View style={styles.formField}>
              <IonIcon name="person" size={20} style={styles.icon} />
              <TextInput placeholder="Nombre*" />
            </View>
            <View style={styles.formField}>
              <TextInput placeholder="Apellidos*" />
            </View>
          </View>
          <View style={styles.formField}>
            <IonIcon name="call" size={20} style={styles.icon} />
            <TextInput placeholder="Número de WhatsApp*" />
          </View>
          <View style={styles.formField}>
            <IonIcon name="mail" size={20} style={styles.icon} />
            <TextInput placeholder="E-Mail (opcional)" />
          </View>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput placeholder="Dirección de Entrega" />
          </View>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput placeholder="Ciudad" />
          </View>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput placeholder="Estado" />
          </View>
          <View style={styles.buttonField}>
            <Button
              title="Comprar con Tarjeta de Credito/Debito"
              onPress={goToStripe}
            />
          </View>
          <View style={styles.buttonField}>
            <Button title="Comprar por WhatsApp" onPress={goToWhatsApp} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  subContainer: {
    maxWidth: 900,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  formField: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    minWidth: "50%",
  },
  icon: {
    marginRight: 10,
  },
  form2Field: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonField: {
    marginBottom: 10,
  },
});
