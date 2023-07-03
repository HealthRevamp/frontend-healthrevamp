import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
const Stack = createNativeStackNavigator();
import DashboardPage from "../screens/dashboard";
import FoodNListPage from "../screens/foodNutrition";
import ChallengePage from "../screens/challange";
import PaymentStack from "./paymentStack";
import RunPage from "../screens/run";
import DetailHabbit from "../screens/detailHabit";
import Habbit from "../screens/habbits";
export default function DashboardTabs() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E87CE",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#1E87CE",
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff'
      }}
    >
      <Stack.Screen name="Home" component={DashboardPage} />
      <Stack.Screen name="Food Nutrition" component={FoodNListPage} />
      <Stack.Screen name="Challenge" component={ChallengePage} />
      <Stack.Screen name="Payment" component={PaymentStack} />
      <Stack.Screen name="Run" component={RunPage} />
      <Stack.Screen name="DetailHabit" component={DetailHabbit} />
      <Stack.Screen name="Habbit" component={Habbit} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  footBar: {
    backgroundColor: "#000",
  },
});
