import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18 0H2C1 0 0 0.9 0 2V5.01C0 5.73 0.43 6.35 1 6.7V18C1 19.1 2.1 20 3 20H17C17.9 20 19 19.1 19 18V6.7C19.57 6.35 20 5.73 20 5.01V2C20 0.9 19 0 18 0ZM17 18H3V7H17V18ZM18 5H2V2H18V5Z"
          fill="#FF6B00"
        />
        <Path d="M13 10H7V12H13V10Z" fill="#FF6B00" />
      </Svg>
    </View>
  );
};

export default SvgIcon;
