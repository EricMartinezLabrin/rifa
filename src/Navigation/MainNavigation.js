import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Main from "../Screens/Main";
import Premios from "../Screens/Premios";
import Gallery from "../Screens/Gallery";
import GalleryList from "../Screens/GalleryList";
import Tyc from "../Screens/Tyc";
import Register from "../Screens/Register";
import Stripe from "../Screens/Stripe";
import PagarPendientes from "../Screens/PagarPendientes";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicio"
        component={Main}
        options={{
          drawerLabel: "Números Disponibles",
          drawerIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
      <Drawer.Screen
        name="Premios"
        component={Premios}
        options={{
          drawerLabel: "Premios",
          drawerIcon: ({ color }) => (
            <Ionicons name="gift" color={color} size={26} />
          ),
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />

      <Drawer.Screen
        name="Tyc"
        component={Tyc}
        options={{
          drawerLabel: "Términos y Condiciones",
          drawerIcon: ({ color }) => (
            <Ionicons name="document" color={color} size={26} />
          ),
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
      <Drawer.Screen
        name="Pagar Pendientes"
        component={PagarPendientes}
        options={{
          drawerLabel: "Pagar Pendientes",
          drawerIcon: ({ color }) => (
            <Ionicons name="card" color={color} size={26} />
          ),
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          drawerLabel: () => null,
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
      <Drawer.Screen
        name="Gallery"
        component={Gallery}
        options={{
          drawerLabel: () => null,
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
      <Drawer.Screen
        name="GalleryList"
        component={GalleryList}
        options={{
          drawerLabel: () => null,
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
      <Drawer.Screen
        name="Stripe"
        component={Stripe}
        options={{
          drawerLabel: () => null,
          headerBackgroundContainerStyle: styles.menuHeader,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuHeader: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHeaderText: {
    color: "white",
    fontSize: 30,
  },
  menuItem: {
    padding: 10,
    fontSize: 18,
    color: "black",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    marginRight: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
  menuItemTextActive: {
    color: "red",
  },
  menuItemTextInactive: {
    color: "black",
  },
  menuFooter: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  menuFooterText: {
    fontSize: 18,
  },
});
