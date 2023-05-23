import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BtnLarge, SvgLogo, screenWidth } from "../../07_shared";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <View style={s.parent}>
        <View style={s.logo}>
          <SvgLogo />
        </View>
        <View style={s.actions}>
          <BtnLarge
            label={"Let's start"}
            onPress={() => navigation.navigate("Login")}
          />
          <View style={s.textContainer}>
            <Text style={s.textTerms} numberOfLines={2}>
              By using this service, you agree to our{" "}
              <TouchableOpacity
                onPress={() => navigation.navigate("TermsOfUse")}
              >
                <Text style={s.textTermsLink} numberOfLines={1}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>{" "}
              .We only access the contact info you provide.
            </Text>
          </View>
        </View>
      </View>
    </View>
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
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 0,
    marginBottom: 16,
  },
  textContainer: {
    width: screenWidth - 32,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  textTerms: {
    fontWeight: 400,
    color: "#AEAEB2",
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: "center",
  },
  textTermsLink: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.4,
    color: "#FF6B00",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
