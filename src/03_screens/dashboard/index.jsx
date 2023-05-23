import "react-native-gesture-handler";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchBar } from "react-native-screens";

const Stack = createStackNavigator();

const Item = ({ size, margin, text }) => (
  <View
    style={[
      styles.item,
      { width: size, height: size, marginHorizontal: margin },
    ]}
  >
    <Text style={styles.itemText}>{text}</Text>
  </View>
);

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.grid}>
        <Row>
          <Col numRows={1}>
            <Text style={{ left: 10, top: 10, fontSize: 14, color: "#AEAEB2" }}>
              Revenue for today
            </Text>
            <Text style={{ left: 10, top: 16, fontSize: 24 }}>
              304,657.74 SEK
            </Text>
            <Text
              style={{
                left: 10,
                top: 20,
                fontSize: 12,
                color: "#AEAEB2",
              }}
            >
              32,433.43 SEK more than yesterday
            </Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <Text style={{ left: 10, top: 10, fontSize: 14, color: "#AEAEB2" }}>
              Top seller for today
            </Text>
            <Text style={{ left: 10, top: 16, fontSize: 24 }}>
              MacBook Pro 14 M1
            </Text>
            <Text
              style={{
                left: 10,
                top: 20,
                fontSize: 12,
                color: "#AEAEB2",
              }}
            >
              Sold 24 units
            </Text>
          </Col>
        </Row>
      </View>
    </SafeAreaView>
  );
};

function StackDashboard({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1, //num of col I want to see
    marginHorizontal: "auto",
    width: 361,
    justifycontent: "center",
    alignself: "center",
    flexDirection: "column",
  },
  "1col": {
    borderColor: "black",
    padding: 16,
    borderWidth: 0.1,
    flex: 1,
    margin: 10,
    height: 120,
    borderRadius: 2,
  },
  row: {
    flexDirection: "row",
  },
});

export default StackDashboard;
