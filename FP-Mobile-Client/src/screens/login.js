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
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const { navigate } = useNavigation();
  const onClickRegister = () => {
    navigate("RegisterPage");
  };
  const onClickLogin = () => {
    navigate("Dashboard");
  };
  return (
    <>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {/* Title */}
        <View>
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
                source={require("../../assets/logo.png")}
                style={{ width: "100%", resizeMode: "contain" }}
              />
            </View>
          </View>
          <Text
            style={{
              color: "#0C6EB1",
              fontWeight: "bold",
              fontSize: 32,
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </View>
        {/* Form */}
        <View style={styles.containerForm}>
          <TextInput placeholder="type your username" style={styles.input} />
          <TextInput placeholder="type your password" style={styles.input} />
          <View style={{ padding: 20.0 }}>
            <LinearGradient
              colors={["#0C6EB1", "#22C49D"]}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.button}
              onPress={onClickLogin}
            >
              <TouchableOpacity onPress={onClickLogin}>
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TouchableOpacity onPress={onClickRegister}>
            <Text
              style={{ textAlign: "center", fontSize: 16, color: "#0C6EB1" }}
            >
              Don’t have an account? sign up here
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ bottom: 0, position: "relative", paddingLeft: 10 }}>
          <Image
            source={require("../../assets/login-regis.png")}
            style={{ width: 210, height: 200 }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    padding: 20.0,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
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
