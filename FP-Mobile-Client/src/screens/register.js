import React, { useState } from "react";
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
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const handleRegister = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://9bc4-103-138-68-174.ap.ngrok.io/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, height, width }),
        }
      );

      setLoading(false);
      if (response.ok) {
        Alert.alert("Success", "Registration successful!");
        // Reset form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setHeight("");
        setWidth("");
        navigate("LoginPage");
      } else {
        Alert.alert("Error", "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert("Error", "An error occurred!");
    }
  };

  return (
    <>
      {loading && (
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
      )}
      <ScrollView>
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            backgroundColor: "#fff",
            paddingTop: 40,
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
                fontWeight: "400",
                fontSize: 32,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </View>
          {/* Form */}
          <View style={styles.containerForm}>
            <TextInput
              placeholder="type your username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
            <TextInput
              placeholder="type your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              placeholder="type your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              placeholder="type your height"
              value={height}
              onChangeText={setHeight}
              style={styles.input}
            />
            <TextInput
              placeholder="type your width"
              value={width}
              onChangeText={setWidth}
              style={styles.input}
            />
            <View style={{ padding: 20.0 }}>
              <LinearGradient
                colors={["#0C6EB1", "#22C49D"]}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.button}
              >
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View style={{ bottom: 0, position: "relative", paddingLeft: 10 }}>
            <Image
              source={require("../../assets/login-regis.png")}
              style={{ width: 210, height: 200 }}
            />
          </View>
        </View>
      </ScrollView>
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
