import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, LogBox } from "react-native";
import MainStack from "./src/navigators/stackNav";
import DashboardTabs from "./src/navigators/dashboardTabs.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import { publishableKey } from "./src/config/apiKey";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { PaperProvider } from "react-native-paper";
export default function App() {
  LogBox.ignoreAllLogs();
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <Provider store={store}>
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
              <Stack.Screen
                name="Dashboard"
                component={DashboardTabs}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </StripeProvider>
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
