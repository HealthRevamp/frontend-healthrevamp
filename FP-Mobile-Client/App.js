import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Login from "./src/screens/login";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Run from "./src/screens/run";
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <Login />
            
          </ScrollView>
          {/* <Run /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
