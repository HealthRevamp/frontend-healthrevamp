import React, { useState, useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { doAddhabbits } from "../actions/action";
import { selectData, selectLoading, selectError } from "../slice/selector";
import { useSelector, useDispatch } from "react-redux";
import { getAllHabbits } from "../slice/slice";
import { addHabbits } from "../slice/slice";
import { delHabbits } from "../slice/slice";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

export default function Habbits() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [displayAddHabbits, setDisplayAddHabbits] = useState("none");

  const { habbitsData } = useSelector((state) => state.user);
  const data = habbitsData.habits;

  const storeData = async () => {
    try {
      const value = await AsyncStorage.getItem("access_token");
      if (value !== null) {
        dispatch(getAllHabbits(value));
        // console.log(value, '<<<<< ini token');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    storeData();
  }, []);
  // everyting form
  const seeForm = () => {
    setDisplayAddHabbits("flex");
  };
  const hideForm = () => {
    setDisplayAddHabbits("none");
  };
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const move = () => {
    setDisplayAddHabbits("none");
  };
  const handleAddHabbits = async () => {
    storeDataAdd();
  };
  const storeDataAdd = async () => {
    try {
      const move = () => {
        navigate("Habbit");
      };
      const AlertSuccess = () => {
        Alert.alert("Success", "Add successful!");
        move();
      };
      const AlertFailed = () => {
        Alert.alert("Adding failed!", "Check your input");
      };
      const value = await AsyncStorage.getItem("access_token");
      if (value !== null) {
        dispatch(
          addHabbits({
            value,
            name,
            time,
            description,
            AlertSuccess,
            AlertFailed,
            move,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I've been pressed for 800 milliseconds");
    }
  };
  const subjects = [
    {
      id: 1,
      name: "Runing",
      time: "Senen, 29 April pukul 12.00",
      description: "lorem mejikuhibiniu abc 5 dasar ditaman ",
    },
    {
      id: 2,
      name: "Kayang",
      time: "Selasa, 30 April pukul 12.00",
      description: "lorem 2 mejikuhibiniu abc 5 dasar ditaman ",
    },
    {
      id: 3,
      name: "Push-Up",
      time: "Rabu, 31 April pukul 12.00",
      description: "lorem 3 mejikuhibiniu abc 5 dasar ditaman ",
    },
    {
      id: 4,
      name: "Sit-Up",
      time: "Kamis, 32 April pukul 12.00",
      description: "lorem 4 mejikuhibiniu abc 5 dasar ditaman ",
    },
  ];

  const delData = async (id) => {
    try {
      const value = await AsyncStorage.getItem("access_token");
      if (value !== null) {
        dispatch(delHabbits({ value, id }));
        useEffect(() => {
          storeData();
        }, []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const longPress = (id) => {
    delData(id);
  };

  const onePress = () => {
    alert("Hold to delete habbits");
  };

  return (
    <>
      {/* Form */}
      <View
        style={{
          display: displayAddHabbits,
          position: "absolute",
          zIndex: 1,
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          backgroundColor: "black",
          height: "100%",
          // opacity: 0.9,
        }}
      >
        <View style={{ marginTop: 60 }}>
          <LinearGradient
            colors={["#0C6EB1", "#22C49D"]}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.buttonAdd}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Add your habbit
            </Text>
            <View
              style={{
                width: 360,
                paddingHorizontal: 10,
                paddingVertical: 20,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <View style={styles.containerForm}>
                <TextInput
                  placeholder="Your habbits"
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Your time"
                  value={time}
                  onChangeText={setTime}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Your description"
                  value={description}
                  onChangeText={setDescription}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <TouchableOpacity onPress={handleAddHabbits}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => hideForm()}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => seeForm()}>
          <LinearGradient
            colors={["#0C6EB1", "#22C49D"]}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.buttonAdd}
          >
            <Text style={styles.buttonText}>Add your Habbits</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ padding: 2 }}>
          {data?.map((el, i) => {
            return (
              <TouchableOpacity
                onLongPress={() => longPress(el.id)}
                onPress={onePress}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: 35,
                    padding: 10,
                    margin: 10,
                    minWidth: 125,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  {/* Card content */}
                  <View>
                    <Image
                      source={require("../../assets/habits-icon.png")}
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                  <View key={i} style={{ marginLeft: 10, marginTop: 6 }}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                      }}
                    >
                      {el.name}
                    </Text>
                    <Text style={{ fontWeight: "bold", paddingTop: 10 }}>
                      {el.time}
                    </Text>
                    <Text style={{ paddingTop: 10 }}>{el.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerForm: {
    padding: 20.0,
  },
  input: {
    height: 50,
    margin: 12,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 35,
    borderRadius: 18,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
    shadowColor: "#9B9B9B",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: "#0C6EB1",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
