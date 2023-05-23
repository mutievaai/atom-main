import "react-native-gesture-handler";
import List from "./ui/list";
import { createStackNavigator } from "@react-navigation/stack";
import { BtnGoBack } from "../../05_features";
import { TextHeaderPrevCur } from "../../07_shared";

const Stack = createStackNavigator();

function StackSettingsCatalog() {
  return (
    <Stack.Navigator
      initialRouteName={"SettingsCatalogList"}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => <BtnGoBack navigation={navigation} />,
        headerTitle: "",
      })}
    >
      <Stack.Screen
        name={"SettingsCatalogList"}
        component={List}
        options={({ navigation }) => ({
          headerTitle: () => (
            <TextHeaderPrevCur prev={"Catalog"} cur={"Settings"} />
          ),
          headerTitleAlign: "center",
          headerLeft: () => <BtnGoBack navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

export default StackSettingsCatalog;
