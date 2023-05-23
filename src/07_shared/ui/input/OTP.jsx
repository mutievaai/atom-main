import screenWidth from "../../utils/screenWidth";
import screenHeight from "../../utils/screenHeight";
import { useRef, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const InputOtp = ({
  containerStyle,
  otpStyles,
  onTyping,
  onFinish,
  codes,
  setCodes,
  ...props
}) => {
  const codeCount = 6;
  const inputCodeRef = useRef(new Array());

  useEffect(() => {
    onTyping && onTyping(getCodes());
    const isTypeFinish = codes.every((i) => i !== "");
    if (isTypeFinish) {
      onFinish && onFinish(getCodes());
    }
  }, [codes]);

  const getCodes = () => {
    return codes.join("");
  };

  const onChangeCode = (code, index) => {
    const typedCode = code.slice(-1);
    const currentCodes = [...codes];
    currentCodes[index] = typedCode;
    setCodes(currentCodes);

    if (code.length > 0 && index < codeCount - 1) {
      inputCodeRef.current[index + 1].focus();
    } else if (code.length === 0 && index > 0) {
      inputCodeRef.current[index - 1].focus();
    }
  };

  return (
    <View style={s.form}>
      {codes.map((code, index) => (
        <TextInput
          key={`${index}`}
          ref={(element) => (inputCodeRef.current[index] = element)}
          style={[
            s.input,
            otpStyles,
            {
              width: screenWidth / (codeCount + 2),
              height: screenHeight / 14,
            },
          ]}
          onChangeText={(text) => onChangeCode(text, index)}
          value={code}
          keyboardType="phone-pad"
          autoCapitalize="none"
          {...props}
        />
      ))}
    </View>
  );
};

const s = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    marginHorizontal: 4,
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "#AEAEB2",
    borderRadius: 10,
    borderWidth: 0,
  },
});

export default InputOtp;
