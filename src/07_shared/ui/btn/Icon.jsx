import { TouchableOpacity, StyleSheet } from "react-native";

const ButtonIcon = ({ onPress, icon }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    marginStart: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 0,
  },
});

export default ButtonIcon;
