import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={14}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 0.00999999L2 0C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 18H2V4H12V18ZM11 12H8V7H6V12H3L7 16L11 12Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
