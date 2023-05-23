import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";

const ListItem = ({ icon, label, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingVertical: 12.5,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <View
          style={{
            maxWidth: 22,
            width: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 16.8,
            color: color ? color : "#000000",
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
