import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const SvgIcon = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { position: "relative", marginStart: 16 },
      ]}
    >
      <Svg
        width={18}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
