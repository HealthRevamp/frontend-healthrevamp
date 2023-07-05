import React, { useState, AsyncStorage, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  selectData,
  selectLoading,
  selectError,
  selectDataUser,
} from "../slice/selector";
const subjects = [
  { id: 1, image: require("../../assets/run-icon.png"), navigate: "Run" },
  { id: 2, image: require("../../assets/habits-icon.png"), navigate: "Habbit" },
  {
    id: 3,
    image: require("../../assets/challange-icon.png"),
    navigate: "Challenge",
  },
  {
    id: 4,
    image: require("../../assets/nutrition-information-icon.png"),
    navigate: "Food Nutrition",
  },
];

const cardGap = 16;

const cardWidth = (Dimensions.get("window").width - cardGap * 3) / 2;
export default function DashboardPage() {
  const dataUser = useSelector(selectDataUser);
  const [search, setSearch] = useState("");
  const { navigate } = useNavigation();
  const [displayRank, setDisplayRank] = useState("none");
  // compare Date Expired
  const dateUserSub = [];
  dateUserSub.push(dataUser.endSub.split("-")[0]);
  dateUserSub.push(dataUser.endSub.split("-")[1]);
  dateUserSub.push(dataUser.endSub.split("-")[2].split("T")[0]);
  console.log(dateUserSub);
  const getDate = new Date();
  const dateUserComp = [];
  dateUserComp.push(getDate.getFullYear().toString());
  dateUserComp.push(getDate.getMonth().toString());
  dateUserComp.push(getDate.getDate().toString());
  const compareYear = +dateUserSub[0] - +dateUserComp[0];
  const compareMonth = +dateUserSub[1] - (+dateUserComp[1]+1);
  const compareDate = +dateUserSub[2] - +dateUserComp[2];
  useEffect(() => {
    return async () => {};
  }, []);

  const seeRank = () => {
    setDisplayRank("flex");
  };
  return (
    <>
      {compareYear === 0 && compareMonth === 0 && compareDate < 1 ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "black",
            height: "100%",
            opacity: 0.8,
          }}
        >
          <TouchableOpacity onPress={() => {navigate('Payment')}}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
              paddingHorizontal: 20
            }}
          >
            Your account is expired. Tap this word to make a payment.
          </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={{ marginTop: "6%" }}>
          <View
            style={{
              display: displayRank,
              position: "absolute",
              zIndex: 1,
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              backgroundColor: "black",
              height: "100%",
              opacity: 0.9,
            }}
          >
            <View style={{ marginTop: 60 }}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Rank
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  width: 360,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ flex: 1, color: "#000" }}>No</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Name</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Total Distance</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, color: "#000" }}>1</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Syahrul</Text>
                  <Text style={{ flex: 1, color: "#000" }}>42 km</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, color: "#000" }}>1</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Syahrul</Text>
                  <Text style={{ flex: 1, color: "#000" }}>42 km</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, color: "#000" }}>1</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Syahrul</Text>
                  <Text style={{ flex: 1, color: "#000" }}>42 km</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ flex: 1, color: "#000" }}>1</Text>
                  <Text style={{ flex: 1, color: "#000" }}>Syahrul</Text>
                  <Text style={{ flex: 1, color: "#000" }}>42 km</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            {/* Profile */}
            <View style={styles.containerProfile}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textProfile}>
                  Hi, {dataUser?.username}
                  {dataUser?.level === 1 ? (
                    <Ionicons
                      name="medal-outline"
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#fff",
                      }}
                    />
                  ) : (
                    <Ionicons
                      name="medal-outline"
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#0C6EB1",
                      }}
                    />
                  )}
                </Text>
                <Text style={styles.textHallo}>Let's check your activity</Text>
                {compareYear === 0 &&
                compareMonth <= 1 &&
                compareDate <= 7 &&
                compareDate > 0 ? (
                  <Text
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                      marginTop: 10,
                      fontWeight: "bold",
                      paddingVertical: 4,
                      paddingHorizontal: 10,
                      borderColor: "red",
                      borderWidth: 2,
                    }}
                  >
                    Your account will be expired at {dataUser?.endSub}
                  </Text>
                ) : (
                  ""
                )}
              </View>
              <View style={{ marginRight: 10 }}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                  source={require("../../assets/challange.png")}
                ></Image>
              </View>
            </View>

            {/* give rank */}
            <TouchableOpacity
              onPress={() => seeRank()}
              underlayColor="transparent"
              activeOpacity={1}
            >
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
            </TouchableOpacity>

            {/* calories */}
            <View style={styles.containerCalories}>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    paddingLeft: 20,
                    paddingTop: 10,
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
                    <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                      {dataUser?.totalCalorie}
                    </Text>
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
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 16,
                  paddingRight: 16,
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
                      <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigate(subject.navigate)}
                      >
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerNutrition: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "87%",
    flex: 1,
    paddingTop: 9,
  },
  inputNutrition: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  // =====================
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
    borderRadius: 10,
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
    paddingLeft: 30,
    paddingRight: 30,
    padding: 20,
    flex: 1,
    backgroundColor: "#1E87CE",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
    gap: 20,
  },
  textProfile: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 24,
  },
  textHallo: {
    color: "#fff",
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
    borderRadius: 30,
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
