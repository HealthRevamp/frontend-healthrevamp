import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function ChallengeScreen() {
  const [activeCard, setActiveCard] = useState(null);

  const navigateToScreen = (id) => {
    // Handle navigation based on ID
    console.log("Navigating to screen with ID:", id);
  };

  const handleCardPressIn = (id) => {
    setActiveCard(id);
  };

  const handleCardPressOut = () => {
    setActiveCard(null);
  };

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
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: "100%", resizeMode: "contain" }}
              source={require("../../assets/challange-page.png")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Challenge List
            </Text>
            {/* Card Layout */}
            <View>
              <TouchableOpacity
                style={{
                  borderRadius: 35,
                  padding: 10,
                  margin: 10,
                  minWidth: 125,
                  backgroundColor: activeCard === 1 ? "#eee" : "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                activeOpacity={0.8}
                onPress={() => navigateToScreen(1)}
                onPressIn={() => handleCardPressIn(1)}
                onPressOut={handleCardPressOut}
              >
                {/* Card content */}
                <Text
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 8,
                    bottom: 8,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Feature
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 35,
                  padding: 10,
                  margin: 10,
                  minWidth: 125,
                  backgroundColor: activeCard === 2 ? "#eee" : "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                activeOpacity={0.8}
                onPress={() => navigateToScreen(2)}
                onPressIn={() => handleCardPressIn(2)}
                onPressOut={handleCardPressOut}
              >
                {/* Card content */}
                <Text
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  2
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 8,
                    bottom: 8,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Feature
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 35,
                  padding: 10,
                  margin: 10,
                  minWidth: 125,
                  backgroundColor: activeCard === 3 ? "#eee" : "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                activeOpacity={0.8}
                onPress={() => navigateToScreen(3)}
                onPressIn={() => handleCardPressIn(3)}
                onPressOut={handleCardPressOut}
              >
                {/* Card content */}
                <Text
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  3
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 8,
                    bottom: 8,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Feature
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 35,
                  padding: 10,
                  margin: 10,
                  minWidth: 125,
                  backgroundColor: activeCard === 4 ? "#eee" : "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                activeOpacity={0.8}
                onPress={() => navigateToScreen(4)}
                onPressIn={() => handleCardPressIn(4)}
                onPressOut={handleCardPressOut}
              >
                {/* Card content */}
                <Text
                  style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  4
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 8,
                    bottom: 8,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Feature
                </Text>
              </TouchableOpacity>
              {/* Other cards */}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
