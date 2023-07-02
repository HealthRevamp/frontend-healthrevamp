import * as React from "react";
import { PaperProvider } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardPage() {
  return (
    <>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          Find your nutrition
        </Text>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View style={styles.card}>
            <View style={styles.image}>
              <Image
                source={{ uri: "https://natureclaim.com/images/banana.jpg" }}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>Banana Nutrition</Text>
              <Text style={{ marginBottom: 8, fontWeight: "bold" }}>
                Calories: 89 kcal
              </Text>
              <Text style={styles.description}>
                Banana are native to Southeast Asia and grow in many warmer
                areas of the world. Bananas are lengthy yellow fruits with lots
                of health benefits. They are high in vitamin C, vitamin B6
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.image}>
              <Image
                source={{ uri: "https://natureclaim.com/images/banana.jpg" }}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>Banana Nutrition</Text>
              <Text style={{ marginBottom: 8, fontWeight: "bold" }}>
                Calories: 89 kcal
              </Text>
              <Text style={styles.description}>
                Banana are native to Southeast Asia and grow in many warmer
                areas of the world. Bananas are lengthy yellow fruits with lots
                of health benefits. They are high in vitamin C, vitamin B6
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.image}>
              <Image
                source={{ uri: "https://natureclaim.com/images/banana.jpg" }}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>Banana Nutrition</Text>
              <Text style={{ marginBottom: 8, fontWeight: "bold" }}>
                Calories: 89 kcal
              </Text>
              <Text style={styles.description}>
                Banana are native to Southeast Asia and grow in many warmer
                areas of the world. Bananas are lengthy yellow fruits with lots
                of health benefits. They are high in vitamin C, vitamin B6
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "grey",
  },
  body: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000000",
  },
  description: {
    fontSize: 16,
    color: "#000000",
    lineHeight: 20,
  },
});
