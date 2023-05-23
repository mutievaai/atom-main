import "react-native-gesture-handler";
import List from "./ui/list";
import Account from "./ui/account";
import { createStackNavigator } from "@react-navigation/stack";
import { BtnGoBack } from "../../05_features";
import { TextHeaderCur, TextHeaderPrevCur } from "../../07_shared";

const Stack = createStackNavigator();

function StackSettingsViewer() {
  return (
    <Stack.Navigator
      initialRouteName={"SettingsViewerList"}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => <BtnGoBack navigation={navigation} />,
        headerTitle: "",
      })}
    >
      <Stack.Screen
        name={"SettingsViewerList"}
        component={List}
        options={({ navigation }) => ({
          headerTitle: () => <TextHeaderCur cur={"Settings"} />,
          headerTitleAlign: "center",
          headerLeft: () => <BtnGoBack navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name={"SettingsViewerAccount"}
        component={Account}
        options={({ navigation }) => ({
          headerTitle: () => (
            <TextHeaderPrevCur prev={"Settings"} cur={"Account"} />
          ),
          headerTitleAlign: "center",
          headerLeft: () => <BtnGoBack navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

export default StackSettingsViewer;
