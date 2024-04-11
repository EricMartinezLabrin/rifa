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

  React.useEffect(() => {
    const urlImages = async () => {
      const response = await getPictureApi(id);
      setImages(response.pictures);
    };
    urlImages();
  }, [id]);

  const goToGalleryList = (idGallery) => {
    navigate("GalleryList", { id: idGallery, urls: images, lastId: id });
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
      <View style={styles.backButton}>
        <Button title="Volver al Premios" onPress={() => navigate("Premios")} />
      </View>
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
});
