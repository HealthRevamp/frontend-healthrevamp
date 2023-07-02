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
import FoodNListPage from "../screens/foodNutrition";
import ChallengePage from "../screens/challange";
import PaymentStack from "../navigators/paymentStack";
import RunPage from "../screens/run";
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
        tabBarStyle: {
          backgroundColor: "#1E87CE",
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff'
      }}
    >
      <Tab.Screen name="Home" component={DashboardPage} />
      <Tab.Screen name="Food Nutrition" component={FoodNListPage} />
      <Tab.Screen name="Challenge" component={ChallengePage} />
      <Tab.Screen name="Payment" component={PaymentStack} />
      <Tab.Screen name="Run" component={RunPage} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footBar: {
    backgroundColor: "#000",
  },
});
