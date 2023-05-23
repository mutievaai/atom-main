import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const SvgIcon = () => {
  return (
    <View>
      <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M11.89 10.1C10.11 9.51 9.25 9.14 9.25 8.2C9.25 7.18 10.36 6.81 11.06 6.81C12.37 6.81 12.85 7.8 12.96 8.15L14.54 7.48C14.39 7.03 13.72 5.56 12 5.24V4H10V5.26C7.52 5.82 7.51 8.12 7.51 8.22C7.51 10.49 9.76 11.13 10.86 11.53C12.44 12.09 13.14 12.6 13.14 13.56C13.14 14.69 12.09 15.17 11.16 15.17C9.34 15.17 8.82 13.3 8.76 13.08L7.1 13.75C7.73 15.94 9.38 16.53 10 16.71V18H12V16.76C12.4 16.67 14.9 16.17 14.9 13.54C14.9 12.15 14.29 10.93 11.89 10.1ZM2 20H0V14H6V16H3.52C5.13 18.41 7.88 20 11 20C15.97 20 20 15.97 20 11H22C22 17.08 17.08 22 11 22C7.28 22 3.99 20.15 2 17.33V20ZM0 11C0 4.92 4.92 0 11 0C14.72 0 18.01 1.85 20 4.67V2H22V8H16V6H18.48C16.87 3.59 14.12 2 11 2C6.03 2 2 6.03 2 11H0Z"
          fill="#FF6B00"
        />
      </Svg>
    </View>
  );
};

export default SvgIcon;
