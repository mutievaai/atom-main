import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z"
          fill="#FF3B30"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
