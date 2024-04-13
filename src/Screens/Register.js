import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Linking,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useFormik } from "formik";
import * as yup from "yup";

import { TicketByIdApi } from "../Api/backend";
import { createPlayerApi } from "../Api/backend";
import { UpdateTicketApi } from "../Api/backend";

export default function Register(props) {
  const { navigation } = props;
  const { selectedNumber } = props.route.params;
  const [checked, setChecked] = React.useState(false);
  const [action, setAction] = React.useState("");
  const lastnameRef = React.useRef();
  const whatsappRef = React.useRef();
  const emailRef = React.useRef();
  const addressRef = React.useRef();
  const cityRef = React.useRef();
  const stateRef = React.useRef();

  const goToStripe = (player) => {
    navigation.navigate("Stripe", { player: player });
  };
  const goToWhatsApp = () => {
    navigation.navigate("Inicio");
    Linking.openURL(
      "https://wa.me/5218333457263?text=Hola,%20me%20gustaría%20comprar%20el%20número%20" +
        selectedNumber
    );
  };

  const goToTyc = () => {
    navigation.navigate("Tyc");
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      whatsapp: "",
      direccion: "",
      ciudad: "",
      estado: "",
      tyc_acepted: false,
    },
    validationSchema: yup.object({
      nombre: yup.string().required("El nombre es requerido"),
      apellido: yup.string().required("El apellido es requerido"),
      whatsapp: yup.number().required("El número de WhatsApp es requerido"),
      email: yup.string().email("El email no es valido"),
      direccion: yup.string().required("La dirección es requerida"),
      ciudad: yup.string().required("La ciudad es requerida"),
      estado: yup.string().required("El estado es requerido"),
    }),
    onSubmit: (values) => {
      const checkTicket = async () => {
        const response = await TicketByIdApi(selectedNumber);
        if (response?.ticket.status === 1) {
          // Creamos Player
          const player = {
            nombre: values.nombre,
            apellido: values.apellido,
            email: values.email,
            whatsapp: values.whatsapp,
            direccion: values.direccion,
            ciudad: values.ciudad,
            estado: values.estado,
            ticket_id: selectedNumber,
            tyc_acepted: true,
          };
          const responsePlayer = await createPlayerApi(player);

          // Reservamos Ticket
          const reservarTicket = await UpdateTicketApi(
            selectedNumber,
            2,
            responsePlayer.player_id
          );
          Alert.alert(
            "Número Reservado",
            "A partir de este momento tienes 48 horas para completar el pago, de lo contrario el número será liberado para que otra persona pueda comprarlo."
          );
          if (action === "whatsapp") {
            goToWhatsApp();
          } else {
            goToStripe(player);
          }
        } else {
          Alert.alert("Error", "El número ya fue comprado, escoge otro");
        }
      };
      checkTicket();
    },
  });

  return (
    <ScrollView style={styles.container}>
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
              <TextInput
                placeholder="Nombre*"
                onChangeText={(text) => {
                  formik.setFieldValue("nombre", text);
                }}
                value={formik.values.nombre}
                onSubmitEditing={() => lastnameRef.current.focus()}
              />
            </View>
            <View style={styles.formField}>
              <TextInput
                ref={lastnameRef}
                placeholder="Apellidos*"
                onChangeText={(text) => {
                  formik.setFieldValue("apellido", text);
                }}
                value={formik.values.apellido}
                onSubmitEditing={() => whatsappRef.current.focus()}
              />
            </View>
          </View>
          <Text style={styles.error}>
            {formik.touched.nombre && formik.errors.nombre}
            {formik.touched.apellido && formik.errors.apellido}
          </Text>
          <View style={styles.formField}>
            <IonIcon name="call" size={20} style={styles.icon} />
            <TextInput
              ref={whatsappRef}
              placeholder="Número de WhatsApp*"
              onChangeText={(text) => {
                formik.setFieldValue("whatsapp", text);
              }}
              keyboardType="phone-pad"
              value={formik.values.whatsapp}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </View>
          <Text style={styles.error}>
            {formik.touched.whatsapp && formik.errors.whatsapp}
          </Text>
          <View style={styles.formField}>
            <IonIcon name="mail" size={20} style={styles.icon} />
            <TextInput
              ref={emailRef}
              placeholder="E-Mail (opcional)"
              keyboardType="email-address"
              onChangeText={(text) => {
                formik.setFieldValue("email", text);
              }}
              value={formik.values.email}
              onSubmitEditing={() => addressRef.current.focus()}
            />
          </View>
          <Text style={styles.error}>
            {formik.touched.email && formik.errors.email}
          </Text>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput
              ref={addressRef}
              placeholder="Dirección de Entrega"
              onChangeText={formik.handleChange("direccion")}
              value={formik.values.direccion}
              onSubmitEditing={() => cityRef.current.focus()}
            />
          </View>
          <Text style={styles.error}>
            {formik.touched.direccion && formik.errors.direccion}
          </Text>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput
              ref={cityRef}
              placeholder="Ciudad"
              onChangeText={formik.handleChange("ciudad")}
              value={formik.values.ciudad}
              onSubmitEditing={() => stateRef.current.focus()}
            />
          </View>
          <Text style={styles.error}>
            {formik.touched.ciudad && formik.errors.ciudad}
          </Text>
          <View style={styles.formField}>
            <IonIcon name="location" size={20} style={styles.icon} />
            <TextInput
              ref={stateRef}
              placeholder="Estado"
              onChangeText={(text) => {
                formik.setFieldValue("estado", text);
              }}
              value={formik.values.estado}
            />
          </View>
          <Text style={styles.error}>
            {formik.touched.estado && formik.errors.estado}
          </Text>
          <View style={styles.formField}>
            <Pressable
              style={[styles.checkboxBase, checked && styles.checkboxChecked]}
              onPress={() => setChecked(!checked)}
            >
              {checked && <IonIcon name="checkmark" size={24} color="white" />}
            </Pressable>
            <Text>
              {" "}
              Acepto los{" "}
              <Pressable onPress={goToTyc} style={styles.tyc}>
                <Text style={{ color: "blue" }}>términos y condiciones</Text>
              </Pressable>
            </Text>
          </View>

          {/* <View style={styles.buttonField}>
            <Button
              title="Comprar con Tarjeta de Credito/Debito"
              onPress={() => {
                setAction("stripe");
                formik.handleSubmit();
              }}
              disabled={!checked}
            />
          </View> */}
          <View style={styles.buttonField}>
            <Button
              title="Comprar por WhatsApp"
              onPress={() => {
                setAction("whatsapp");
                formik.handleSubmit();
              }}
              disabled={!checked}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center",
  },
  subContainer: {
    maxWidth: 900,
    marginBottom: 40,
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
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  tyc: {
    margin: 0,
    padding: 0,
    alignItems: "baseline",
  },
  error: {
    color: "red",
  },
});
