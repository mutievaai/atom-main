import { TouchableOpacity } from "react-native";
import { SvgBurger } from "../../../07_shared";
import { useNavigation } from "@react-navigation/native";

const OpenSidebar = () => {
  const drawerNavigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => drawerNavigation.toggleDrawer()}>
      <SvgBurger name="menu" color="white" />
    </TouchableOpacity>
  );
};

export default OpenSidebar;
