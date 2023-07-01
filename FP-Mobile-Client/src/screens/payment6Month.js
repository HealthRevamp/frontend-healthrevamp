import { CardForm, useConfirmPayment } from "@stripe/stripe-react-native";
import { useCallback, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { BASE_URL } from "../config/base-API";
import { LinearGradient } from "expo-linear-gradient";
const PaymentScreen = () => {
  const [card, setCard] = useState({
    brand: "",
    complete: "",
    country: "",
    expiryMonth: "",
    expiryYear: "",
    last4: "",
    postalCode: "",
  });
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = useCallback(async () => {
    const response = await fetch(`${BASE_URL}/api/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "sgd",
        duration: 180,
      }),
    });
    const { clientSecret } = await response.json();
    console.log("here");

    return clientSecret;
  }, []);

  const handlePayPress = useCallback(async () => {
    if (!card) {
      return;
    }

    try {
      // Fetch Intent Client Secret from backend
      const billingDetails = {
        email: "adibhasany1501@gmail.com",
      };
      const clientSecret = await fetchPaymentIntentClientSecret();
      console.log(clientSecret);
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card",
        paymentMethodData: {
          billingDetails,
        },
      });
      console.log("Success from promise", paymentIntent);
      // ...
    } catch (e) {
      // ...
      console.log("Payment confirmation error", e);
    }
  }, [card, fetchPaymentIntentClientSecret]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{margin: 20, textAlign: 'center', fontSize: 28, fontWeight: 'bold'}}>Subscribe for 6 Month</Text>
      <CardForm
        cardStyle={{
          backgroundColor: "#FFFFFF",
        }}
        style={{
          width: "100%",
          height: 300,
        }}
        onFormComplete={(cardDetails) => {
          console.log(cardDetails);
          setCard(cardDetails);
        }}
      />
      {/* <Button onPress={handlePayPress} title="Pay"  /> */}
      <View style={{ padding: 20.0 }}>
        <LinearGradient
          colors={["#0C6EB1", "#22C49D"]}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.button}
          onPress={handlePayPress}
        >
          <TouchableOpacity onPress={handlePayPress} disabled={loading}>
            <Text style={styles.text}>Pay</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

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

export default PaymentScreen;
