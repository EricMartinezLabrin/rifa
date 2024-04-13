import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { URL } from "../Api/backend";

export default function GalleryList(props) {
  const { id, urls } = props.route.params;
  const [index, setIndex] = React.useState(null);

  console.log(urls);
  console.log(id);

  rewardId = urls[0].reward_id;

  React.useEffect(() => {
    const initialIndex = urls.findIndex((url) => url.id === id);
    setIndex(initialIndex);
  }, [id]);

  const next = () => {
    let newIndex = index + 1;
    if (newIndex >= urls.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const previous = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = urls.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${URL}/media/${urls[index]?.picture}` }}
        style={styles.image}
      />
      {urls.length > 1 && (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={previous}>
            <Text style={styles.textButton}>Anterior</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={next}>
            <Text style={styles.textButton}>Siguiente</Text>
          </Pressable>
        </View>
      )}
      <Pressable
        onPress={() => props.navigation.navigate("Inicio")}
        style={styles.buttonXlBuy}
      >
        <Text style={styles.textButton}>Comprar un Número</Text>
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate("Gallery", { id: rewardId })}
        style={styles.buttonXl}
      >
        <Text style={styles.textButton}>Volver a la Galeria</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    margin: 5,
    width: "45%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  textButton: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonXl: {
    backgroundColor: "red",
    padding: 15,
    margin: 5,
    width: "92%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonXlBuy: {
    backgroundColor: "green",
    padding: 15,
    margin: 5,
    width: "92%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: "center",
    alignItems: "center",
  },
});
