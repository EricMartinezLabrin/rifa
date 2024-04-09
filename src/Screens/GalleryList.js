import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

export default function GalleryList(props) {
  const { id, urls, lastId } = props.route.params;
  const [index, setIndex] = React.useState(id - 1);

  React.useEffect(() => {
    setIndex(id - 1);
  }, [id]);

  const next = () => {
    setIndex(index + 1);
    loop();
  };
  const previous = () => {
    setIndex(index - 1);
    loop();
  };
  const loop = () => {
    if (index < 0) {
      setIndex(urls.length - 1);
    }
    if (index >= urls.length) {
      setIndex(0);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: urls[index] }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={previous}>
          <Text style={styles.textButton}>Anterior</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={next}>
          <Text style={styles.textButton}>Siguiente</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => props.navigation.navigate("Gallery", { id: lastId })}
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
});
