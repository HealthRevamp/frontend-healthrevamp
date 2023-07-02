import React, { useState, AsyncStorage, useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const subjects = [
  { id: 1, image: require("../../assets/run-icon.png") },
  { id: 2, image: require("../../assets/habits-icon.png") },
  { id: 3, image: require("../../assets/challange-icon.png") },
  { id: 4, image: require("../../assets/nutrition-information-icon.png") },
];

const cardGap = 16;

const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;
export default function DashboardPage() {
  useEffect(() => {
    return async () => {};
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          {/* Profile */}
          <View style={styles.containerProfile}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textProfile}>Hi, Jhon Doe</Text>
              <Text style={styles.textHallo}>Let's check your activity</Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                style={{ width: 70, height: 70, borderRadius: 100 }}
                source={require("../../assets/challange.png")}
              ></Image>
            </View>
          </View>

          {/* give rank */}
          <View style={styles.containerGiveRank}>
            <Text style={styles.textGiveRank}>Check your rank</Text>
            <Ionicons
              name="star-outline"
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "blue",
              }}
            />
          </View>

          {/* calories */}
          <View style={styles.containerCalories}>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  paddingLeft: 30,
                  paddingTop: 30,
                  fontWeight: "bold",
                }}
              >
                Calories
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <LinearGradient
                colors={["#0C6EB1", "#22C49D"]}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.linearStyle}
              >
                <View style={styles.textContainer}>
                  <Text style={{ fontSize: 40, fontWeight: "bold" }}>180</Text>
                  <Text style={{ fontSize: 30 }}>KCL</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          {/* Card feature */}
          <View style={{}}>
            <Text
              style={{
                fontSize: 24,
                padding: 10,
                marginLeft: 20,
                marginRight: 20,
                fontWeight: "bold",
              }}
            >
              Feature
            </Text>
            <View style={styles.container}>
              {subjects.map((subject, i) => {
                return (
                  <View
                    key={subject.id}
                    style={[
                      styles.cardContainer,
                      {
                        marginTop: cardGap,
                        marginLeft: i % 2 !== 0 ? cardGap : 0,
                        width: cardWidth,
                      },
                    ]}
                  >
                    <TouchableOpacity style={styles.card}>
                      <Image
                        key={i}
                        source={subject.image}
                        style={{ width: 60, height: 60 }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginBottom: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardContainer: {
    height: 90,
    width: 100,
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerProfile: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    margin: 30,
    flex: 1,
  },
  textProfile: {
    color: "#606060",
    fontWeight: "800",
    fontSize: 24,
  },
  textHallo: {
    color: "#0C6EB1",
    lineHeight: 25,
    fontWeight: 500,
    fontSize: 20,
  },
  containerGiveRank: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 60,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
  },
  textGiveRank: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  containerCalories: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
  },
  linearStyle: {
    borderRadius: 1000,
    height: 230,
    width: 230,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    borderRadius: 1000,
    height: 200,
    width: 200,
    margin: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
