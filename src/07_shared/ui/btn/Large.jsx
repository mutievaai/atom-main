import { Text, TouchableOpacity, StyleSheet } from "react-native";
import screenWidth from "../../utils/screenWidth";

const ButtonLarge = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    width: screenWidth - 32,
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    backgroundColor: "#FF6B00",
    padding: 0,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
});

export default ButtonLarge;
