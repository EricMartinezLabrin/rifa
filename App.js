import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/MainNavigation";
import Gallery from "./src/Screens/Gallery";

export default function App() {
  const linking = {
    prefixes: ["https://rifa.fadetechs.com", "rifa://"],
    config: {
      screens: {
        Inicio: "Inicio",
        Favoritos: "Premios",
        MyEvents: "Tyc",
        MyAccount: "Pagar Pendientes",
        Gallery: "Gallery",
        GalleryList: "GalleryList",
        Register: "Register",
        Stripe: "Stripe",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <StatusBar style="auto" />
      <MainNavigation />
    </NavigationContainer>
  );
}
