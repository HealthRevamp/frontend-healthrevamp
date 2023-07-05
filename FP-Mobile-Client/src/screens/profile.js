import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
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
import { doRegister } from "../actions/action";
import {
  selectData,
  selectLoading,
  selectError,
  selectDataUser,
} from "../slice/selector";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const dataUser = useSelector(selectDataUser);

  // const handleEdit = async () => {
  //   const move = () => {
  //     navigate("formedit");
  //   };
  //   const AlertSuccess = () => {
  //     Alert.alert("Success", "Edit successful!");
  //   };
  //   const AlertFailed = () => {
  //     Alert.alert("Edit failed!", "Check your input");
  //   };
  //   dispatch(
  //     doEdit(
  //       username,
  //       email,
  //       password,
  //       height,
  //       width,
  //       move,
  //       AlertSuccess,
  //       AlertFailed
  //     )
  //   );
  // };

  return (
    <>
      {/* {loading && (
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
          <ActivityIndicator size="large" />
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Patience is part of health
          </Text>
        </View>
      )} */}
      <ScrollView
        style={{ height: "100%", flex: 1, backgroundColor: "#1E87CE" }}
      >
        <View
          style={{
            height: 830,
            backgroundColor: "#fff",
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
          }}
        >
          <Text
            style={{
              marginTop: 30,
              marginLeft: 20,
              fontSize: 30,
              fontWeight: "bold",
              // letterSpacing: 0.25,
              color: "#606060",
            }}
          >
            My Profile
          </Text>
          <Text
            style={{
              marginLeft: 20,
            }}
          >
            Please complate your profile
          </Text>

          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 10 }}
              source={require("../../assets/challange.png")}
            ></Image>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 40
            }}
          >
            <View style={{ marginLeft: 7, borderRadius: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigate("Update Profile");
                }}
                underlayColor="transparent"
                activeOpacity={1}
              >
                <Ionicons style={{textAlign: 'center'}} name="create-outline" size={40} color={"#606060"} />
                <Text>Update Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 7 }}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Payment')
                }}
                underlayColor="transparent"
                activeOpacity={1}
              >
                <Ionicons style={{textAlign: 'center'}} name="card-outline" size={40} color={"#606060"} />
                <Text>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerForm}>
            <View>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 16,
                  color: "#606060",
                  marginTop: 12,
                }}
              >
                Name
              </Text>
              <TextInput
                placeholder={dataUser?.username}
                // placeholder="edit your name"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                editable={false}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 16,
                  color: "#606060",
                  marginTop: 12,
                }}
              >
                Total Calorie
              </Text>
              <TextInput
                //   placeholder={dataUser?.totalCalorie}
                placeholder={`${dataUser?.totalCalorie}`}
                onChangeText={setEmail}
                style={styles.input}
                editable={false}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 16,
                  color: "#606060",
                  marginTop: 12,
                }}
              >
                Height
              </Text>
              <TextInput
                placeholder="170"
                // placeholder="type your height"
                value={dataUser?.height}
                onChangeText={setHeight}
                style={styles.input}
                editable={false}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 16,
                  color: "#606060",
                  marginTop: 12,
                }}
              >
                Width
              </Text>
              <TextInput
                placeholder="60"
                // placeholder="type your width"
                value={dataUser?.width}
                onChangeText={setWidth}
                style={styles.input}
                editable={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    padding: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
  },
  input: {
    height: 50,
    marginHorizontal: 12,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
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
