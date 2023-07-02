import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function ChallengeScreen() {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* images */}
        <View>
          <View
            style={{
              paddingLeft: 50,
              paddingRight: 50,
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Image
              style={{ width: "100%", height: 250, resizeMode: "contain" }}
              source={require("../../assets/challange-page.png")}
            />
          </View>
          {/* Card */}
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Challenge
          </Text>
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text>Card 1</Text>
              </TouchableOpacity>
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
    gap: 26,
  },
  cardContainer: {
    height: 90,
    width: 100,
    backgroundColor: "white",
    borderRadius: 16,
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
});
