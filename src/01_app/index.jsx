import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProcessAuth } from "../02_processes";
import {
  StackDashboard,
  ScreenProduct,
  StackSettingsViewer,
  StackSettingsCatalog,
} from "../03_screens";
import { NavigationSidebar } from "../04_widgets";
import { BtnGoBack, BtnOpenSidebar } from "../05_features";
import { viewerState } from "../06_entities/viewer/model/viewerState";
import { SvgDashboard, SvgProducts } from "../07_shared";

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function SidebarRoutes() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName={"Dashboard"}
      drawerContent={(props) => <NavigationSidebar {...props} />}
      screenOptions={{
        headerShown: true,
        headerLeft: () => <BtnOpenSidebar />,
        headerTitle: "Dashboard",
        headerTitleAlign: "center",
        headerTintColor: "#000000",
      }}
    >
      <Drawer.Screen
        name={"StackDashboard"}
        component={StackDashboard}
        options={{
          title: "Dashboard",
          drawerLabel: "Dashboard",
          drawerIcon: () => <SvgDashboard />,
        }}
      />
      <Drawer.Screen
        name={"Product"}
        component={ScreenProduct}
        options={{
          headerTitle: "Product",
          headerTitleAlign: "center",
          headerTintColor: "#000000",
          drawerIcon: () => <SvgProducts />,
        }}
      />
    </Drawer.Navigator>
  );
}

function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={"Drawer"} component={SidebarRoutes} />
      <AppStack.Screen
        name={"StackSettingsCatalog"}
        component={StackSettingsCatalog}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name={"StackSettingsViewer"}
        component={StackSettingsViewer}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}

function App() {
  const setViewer = useSetRecoilState(viewerState);
  const viewer = useRecoilValue(viewerState);
  /*
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setViewer(userAuth);
    });

    return unsubscribe;
  }, []);
  */
  return (
    <NavigationContainer theme={theme}>
      {viewer ? <AppRoutes /> : <ProcessAuth />}
    </NavigationContainer>
  );
}

export default App;

const theme = {
  dark: false,
  colors: {
    primary: "#5c5e61",
    background: "#ffffff",
    card: "#fff",
    text: "#000",
    border: "rgb(199, 199, 204)",
  },
};
