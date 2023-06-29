import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Run from "./src/screens/run";
import MainStack from "./src/navigators/stackNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
