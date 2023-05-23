import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
      >
        <Path
          d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
