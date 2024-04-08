import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../Screens/Main";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Main} />
      <Drawer.Screen name="Article" component={Main} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuHeader: {
    backgroundColor: "red",
    height: 150,
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
