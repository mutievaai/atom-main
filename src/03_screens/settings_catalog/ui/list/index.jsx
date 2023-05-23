import { View, ScrollView, StyleSheet } from "react-native";
import {
  ListItem,
  SvgCurrency,
  SvgDelete,
  SvgMembers,
} from "../../../../07_shared";

const List = (props) => {
  return (
    <ScrollView contentContainerStyle={{ marginTop: 8 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <ListItem
          icon={<SvgMembers />}
          label={"Members"}
          onPress={() => console.log("Members")}
        />
        <ListItem
          icon={<SvgCurrency />}
          label={"Currency for all products"}
          onPress={() => console.log("Currency for all products")}
        />
        <ListItem
          icon={<SvgDelete />}
          label={"Delete catalog"}
          color={"#FF3B30"}
          onPress={() => console.log("Delete catalog")}
        />
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default List;
