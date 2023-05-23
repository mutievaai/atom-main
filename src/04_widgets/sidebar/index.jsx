import { SafeAreaView } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { SvgSettings } from "../../07_shared";
import { WidgetViewer } from "./ui";

const SidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WidgetViewer
        {...props}
        mt={50}
        backgroundColor={"#F2F2F7"}
        onPress={() =>
          props.navigation.navigate("StackSettingsViewer", {
            screen: "SettingsViewerList",
          })
        }
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Settings Catalog"
          onPress={() =>
            props.navigation.navigate("StackSettingsCatalog", {
              screen: "SettingsCatalogList",
            })
          }
          icon={() => <SvgSettings />}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default SidebarMenu;
