// import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
// import React from "react";

// export default function Premios(props) {
//   const { navigate } = props.navigation;
//   const goToGallery = (id) => {
//     navigate("Gallery", { id: id });
//   };
//   return (
//     <FlatList
//       data={premios}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View style={styles.container}>
//           <Text style={styles.title}>{item.id} lugar</Text>
//           <Text style={styles.subtitle}>{item.nombre}</Text>
//           <Text style={styles.detail}>
//             Premios Disponibles: {item.cantidad}
//           </Text>
//           <Text style={styles.detail}>{item.detail}</Text>
//           <Pressable onPress={() => goToGallery(item.id)}>
//             <Text style={styles.pictureLink}>Ver Fotos...</Text>
//           </Pressable>
//         </View>
//       )}
//     ></FlatList>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 20,
//     maxWidth: 700,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   detail: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   pictureLink: {
//     fontSize: 18,
//     color: "blue",
//     textDecorationLine: "underline",
//     marginBottom: 20,
//   },
// });
import { View, Text } from "react-native";
import React from "react";

export default function Premios() {
  return (
    <View>
      <Text>Premios</Text>
    </View>
  );
}
