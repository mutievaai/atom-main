import firebase from "firebase/compat/app";
import { useState, useRef } from "react";
import {
  ScrollView,
  Text,
  Alert,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../01_app/config/firebase";
import { BtnLarge, InputPhone, screenWidth } from "../../07_shared";

const validatePhoneNumber = (phone) => {
  const pattern = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
  return pattern.test(phone);
};

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const recaptchaVerifier = useRef(null);

  const onSendSMS = async () => {
    if (!validatePhoneNumber(phone)) {
      Alert.alert("Invalid phone number", "Please enter a valid phone number.");
      return;
    }

    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );
      // console.log(verificationId);
      navigation.navigate("OTP", { verificationId, phone });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={s.container} behaviour="padding">
      <ScrollView contentContainerStyle={s.parent}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <View style={s.textContainer}>
          <Text style={s.textPrimary}>Your phone number</Text>
          <Text style={s.textSecondary}>Please enter your phone number.</Text>
        </View>
        <View style={s.input}>
          <InputPhone placeholder={"Phone number"} set={setPhone} />
        </View>
        <View style={s.actions}>
          <BtnLarge label={"Continue"} onPress={() => onSendSMS()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const s = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  parent: {
    flexGrow: 1,
    flexDirection: "column",
  },
  textPrimary: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 28.8,
    justifyContent: "center",
    alignItems: "center",
  },
  textSecondary: {
    fontWeight: 500,
    color: "#AEAEB2",
    fontSize: 14,
    lineHeight: 16.8,
    textAlign: "center",
  },
  actions: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 0,
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    width: screenWidth - 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
