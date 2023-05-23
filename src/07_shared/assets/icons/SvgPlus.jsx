import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FF6B00" />
      </Svg>
    </View>
  );
};

export default SvgIcon;
