import { View, ScrollView, StyleSheet } from "react-native";
import { WidgetViewer } from "../../../../04_widgets";
import {
  ListItem,
  SvgChangeLanguage,
  SvgChangePhone,
  SvgDelete,
  SvgPrivacyPolicy,
  SvgRateUs,
  SvgSignOut,
  SvgSoftwareUpdate,
} from "../../../../07_shared";
import { useSetRecoilState } from "recoil";
import { auth } from "../../../../01_app/config/firebase";
import { viewerState } from "../../../../06_entities/viewer/model/viewerState";

const List = (props) => {
  const setViewer = useSetRecoilState(viewerState);

  const signOut = () => {
    auth.signOut().then(() => {
      setViewer(null);
    });
  };

  return (
    <ScrollView contentContainerStyle={{}}>
      <WidgetViewer
        mt={0}
        backgroundColor={"#FFFFFF"}
        onPress={() =>
          props.navigation.navigate("StackSettingsViewer", {
            screen: "SettingsViewerAccount",
          })
        }
      />
      <View style={{ paddingHorizontal: 16 }}>
        <ListItem
          icon={<SvgChangePhone />}
          label={"Change phone"}
          onPress={() => console.log("Change phone")}
        />
        <ListItem
          icon={<SvgChangeLanguage />}
          label={"Change language"}
          onPress={() => console.log("Change language")}
        />
        <ListItem
          icon={<SvgSoftwareUpdate />}
          label={"Software update"}
          onPress={() => console.log("Software update")}
        />
        <ListItem
          icon={<SvgRateUs />}
          label={"Rate us"}
          onPress={() => console.log("Rate us")}
        />
        <ListItem
          icon={<SvgPrivacyPolicy />}
          label={"Privacy Policy"}
          onPress={() => console.log("Privacy Policy")}
        />
        <ListItem
          icon={<SvgSignOut />}
          label={"Sign out"}
          color={"#FF3B30"}
          onPress={signOut}
        />
        <ListItem
          icon={<SvgDelete />}
          label={"Delete account"}
          color={"#FF3B30"}
          onPress={() => console.log("Delete account")}
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
