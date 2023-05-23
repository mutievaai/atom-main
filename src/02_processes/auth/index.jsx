import { createStackNavigator } from "@react-navigation/stack";
import {
  ScreenFAQ,
  ScreenOTP,
  ScreenTermsOfUse,
  ScreenWelcome,
  ScreenLogin,
} from "../../03_screens";
import { BtnGoBack } from "../../05_features";

const Stack = createStackNavigator();

function StackAuth() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={ScreenWelcome} />
      <Stack.Screen
        name="TermsOfUse"
        component={ScreenTermsOfUse}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => <BtnGoBack navigation={navigation} />,
          headerTitle: "",
        })}
      />
      <Stack.Screen name="FAQ" component={ScreenFAQ} />
      <Stack.Screen
        name="OTP"
        component={ScreenOTP}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => <BtnGoBack navigation={navigation} />,
          headerTitle: "",
        })}
      />
      <Stack.Screen
        name="Login"
        component={ScreenLogin}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => <BtnGoBack navigation={navigation} />,
          headerTitle: "",
        })}
      />
    </Stack.Navigator>
  );
}

export default StackAuth;
