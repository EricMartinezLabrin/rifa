import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { getPictureApi } from "../Api/backend";
import { URL } from "../Api/backend";
const width = Dimensions.get("window").width;
const newWidth = width > 700 ? 700 : width;

export default function Gallery(props) {
  const { navigate } = props.navigation;
  const { id } = props.route.params;
  const [images, setImages] = React.useState([]);
  // console.log(id);

  React.useEffect(() => {
    const urlImages = async () => {
      const response = await getPictureApi(id);
      setImages(response?.pictures);
    };
    urlImages();
  }, [id]);

  const goToGalleryList = (idGallery) => {
    navigate("GalleryList", { id: idGallery, urls: images });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flat}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => goToGalleryList(item.id)}>
              <Image
                source={{ uri: `${URL}/media/${item.picture}` }}
                style={styles.img}
              />
            </Pressable>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <Pressable onPress={() => navigate("Inicio")} style={styles.buttonXlBuy}>
        <Text style={styles.buttonText}>Comprar un Número</Text>
      </Pressable>
      <Pressable onPress={() => navigate("Premios")} style={styles.buttonXl}>
        <Text style={styles.buttonText}>Volver a los Premios</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: newWidth / 2,
    height: newWidth / 2,
    margin: 0,
    resizeMode: "cover",
  },
  flat: {},
  backButton: {
    margin: 10,
    padding: 10,
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
  buttonText: {
    color: "white",
  },
});
