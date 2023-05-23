import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SvgClear from "../../assets/icons/SvgClear";
import screenWidth from "../../utils/screenWidth";

const InputPhone = ({ placeholder, set }) => {
  const [value, setValue] = useState("");

  const handleTextChange = (text) => {
    const formattedValue = text.replace(/[^0-9+]/g, "");
    setValue(formattedValue);
    set(formattedValue);
  };

  const handleClearInput = () => {
    setValue("");
    set("");
  };

  return (
    <View style={{ position: "relative" }}>
      <TextInput
        style={{
          fontSize: 14,
          lineHeight: 16.8,
          height: 42,
          width: screenWidth - 32,
          paddingLeft: 20,
          paddingRight: 30,
          borderRadius: 10,
          backgroundColor: "#F2F2F7",
        }}
        blurOnSubmit={true}
        value={value}
        onChangeText={handleTextChange}
        keyboardType="phone-pad"
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="#828282"
      />
      <TouchableOpacity
        onPress={handleClearInput}
        style={{
          position: "absolute",
          top: 22,
          right: 22,
        }}
      >
        <SvgClear />
      </TouchableOpacity>
    </View>
  );
};

export default InputPhone;
