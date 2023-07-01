import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
import DashboardPage from "../screens/dashboard";
import FoodNList from "../screens/foodNutrition";
import Challenge from "../screens/challange";
export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E87CE",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="Home" component={DashboardPage} />
      <Tab.Screen name="Food Nutrition" component={FoodNList} />
      <Tab.Screen name="Challenge" component={Challenge} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footBar: {
    backgroundColor: "#000",
  },
});
