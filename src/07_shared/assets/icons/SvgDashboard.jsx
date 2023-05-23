import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={18}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M14.5 2L15.96 9H2.04L3.5 2H14.5ZM16 0H2.04L0 9V11H1V17H11V11H15V17H17V11H18V9L16 0ZM3 15V11H9V15H3Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
