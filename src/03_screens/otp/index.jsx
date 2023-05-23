import firebase from "firebase/compat/app";
import { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { BtnLarge, InputOTP, screenWidth } from "../../07_shared";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../01_app/config/firebase";

const OTPScreen = ({ route, navigation }) => {
  const recaptchaVerifier = useRef(null);
  const [codes, setCodes] = useState(Array(6).fill(""));
  const { phone } = route.params;
  const [verificationId, setVerificationId] = useState(
    route.params.verificationId
  );

  const sendNewCode = async () => {
    const provider = new firebase.auth.PhoneAuthProvider();

    try {
      const newVerificationId = await provider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );

      setVerificationId(newVerificationId);

      Alert.alert(
        "New OTP code sent",
        "A new OTP code has been sent to your phone."
      );
    } catch (error) {
      console.log("Error sending new OTP code: " + error);
      Alert.alert(
        "Error",
        "Failed to send a new OTP code. Please try again later."
      );
    }
  };

  const onLoginConfirm = async () => {
    try {
      const combinedCodes = codes.join("");

      if (combinedCodes.length !== 6) {
        Alert.alert("Error", "Please enter a valid 6-digit OTP code.");
        return;
      }

      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        combinedCodes
      );
      await firebase.auth().signInWithCredential(credential);
      console.log(combinedCodes + " successful log in");
      setCodes(Array(6).fill(""));
    } catch (error) {
      Alert.alert("OTPSCreen exception: " + error);
    }
  };

  return (
    <KeyboardAvoidingView style={s.container} behavior="padding">
      <ScrollView contentContainerStyle={s.parent}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <View style={s.textContainer}>
          <Text style={s.textPrimary}>SMS Code</Text>
          <Text style={s.textSecondary}>
            An SMS code was sent to number {phone}. Enter it below
          </Text>
        </View>
        <View style={s.input}>
          <InputOTP
            codes={codes}
            setCodes={setCodes}
            otpStyles={{ backgroundColor: "#eee" }}
          />
          <TouchableOpacity onPress={() => sendNewCode()}>
            <Text style={s.textSendNewCode} numberOfLines={1}>
              Send new code
            </Text>
          </TouchableOpacity>
        </View>

        <View style={s.actions}>
          <BtnLarge label={"Log In"} onPress={() => onLoginConfirm()} />
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
    margin: 16,
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
  textSendNewCode: {
    marginTop: 32,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16.8,
    color: "#FF6B00",
    textDecorationLine: "underline",
  },
});

export default OTPScreen;
