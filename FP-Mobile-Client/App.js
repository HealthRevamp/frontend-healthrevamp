import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Run from "./src/screens/run";
import MainStack from "./src/navigators/stackNav";
import DashboardTabs from "./src/navigators/dashboardTabs.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "./src/screens/payment";
import { publishableKey } from "./src/config/apiKey";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <StripeProvider publishableKey={publishableKey}>
      <NavigationContainer>
        <Stack.Navigator
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
          <Stack.Screen name="Login" component={MainStack} />
          <Stack.Screen name="Dashboard" component={DashboardTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});
