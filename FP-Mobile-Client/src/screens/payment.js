import { CardForm, useConfirmPayment } from "@stripe/stripe-react-native";
import { useCallback, useState } from "react";
import { View, Text, Button } from "react-native";
import { BASE_URL } from "../config/base-API";

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
        duration: 1,
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
    <View>
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

      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};

export default PaymentScreen;
