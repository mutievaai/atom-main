import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRecoilValue } from "recoil";
import { viewerState } from "../../../../06_entities/viewer/model/viewerState";

const Viewer = ({ backgroundColor, onPress, mt, ...props }) => {
  const viewer = useRecoilValue(viewerState);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: backgroundColor, height: "auto" }}>
        <View
          style={{
            marginTop: mt,
            flexDirection: "row",
            gap: 16,
            padding: 16,
          }}
        >
          {viewer && (
            <>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "black",
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                  alingItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 16.8,
                    fontWeight: 500,
                  }}
                >
                  {viewer.displayName}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 14.4,
                    fontWeight: 400,
                    color: "#AEAEB2",
                  }}
                >
                  {viewer.phoneNumber}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Viewer;
