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

export default function Register() {
  return (
    <>
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
            <TextInput placeholder="type your username" style={styles.input} />
            <TextInput placeholder="type your email" style={styles.input} />
            <TextInput placeholder="type your password" style={styles.input} />
            <TextInput placeholder="type your height" style={styles.input} />
            <TextInput placeholder="type your width" style={styles.input} />
            <View style={{ padding: 20.0 }}>
              <LinearGradient
                colors={["#0C6EB1", "#22C49D"]}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.button}
              >
                <Text style={styles.text}>Register</Text>
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
