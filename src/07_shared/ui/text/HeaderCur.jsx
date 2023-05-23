import { View, Text } from "react-native";

const HeaderCur = ({ cur }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{
          color: "#000000",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 21.6,
          marginLeft: 5,
        }}
      >
        {cur}
      </Text>
    </View>
  );
};

export default HeaderCur;
