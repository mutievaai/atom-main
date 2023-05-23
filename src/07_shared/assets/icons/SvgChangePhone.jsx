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
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.17 12.76L13.07 11.66C13.78 10.33 13.6 8.65 12.48 7.53C11.79 6.84 10.9 6.5 10 6.5C9.97 6.5 9.94 6.51 9.91 6.51L11 7.6L9.94 8.66L7.11 5.83L9.94 3L11 4.06L10.04 5.02C11.31 5.03 12.57 5.5 13.54 6.46C15.24 8.17 15.45 10.82 14.17 12.76ZM12.89 14.17L10.06 17L9 15.94L9.95 14.99C8.69 14.98 7.43 14.49 6.47 13.53C4.76 11.82 4.55 9.18 5.83 7.24L6.93 8.34C6.22 9.67 6.4 11.35 7.52 12.47C8.22 13.17 9.15 13.51 10.08 13.48L9 12.4L10.06 11.34L12.89 14.17Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
