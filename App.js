import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigation />
    </NavigationContainer>
  );
}
