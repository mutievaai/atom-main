import { Center } from "native-base";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SearchBar } from "react-native-screens";
// import searchbar from "react-native-screens";
// import searchbar from "../../04_widgets/searchBar/searchbar";
// import Entypo from "react-native-vector-icons";
// import assets from "../../../assets";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};
const Product = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Search");
  const [number, onChangeNumber] = React.useState("");

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ScrollView/> showsVerticalScrollIndicator={false} - hides vertical */}
        <View style={{ flex: 1, padding: 16 }}>
          {/* text input потом на серч бар поменять */}

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search"
          />
          <View style={styles.grid}>
            <Row>
              <Row numRows={1}>
                <Image
                  source={require("../../../assets/14m1.jpg")}
                  style={styles.Image}
                />
                <Row numRows={2}>
                  <Text>Macbook Pro 14 M1</Text>
                  <Text>13 units left</Text>
                </Row>
              </Row>
            </Row>
            <Row>
              <Row numRows={1}>
                <Image
                  source={require("../../../assets/imac.jpg")}
                  style={styles.Image}
                />
                <Row numRows={2}>
                  <Text>IMac M1</Text>
                </Row>
              </Row>
            </Row>
            <Row>
              <Row numRows={1}>
                <Image
                  source={require("../../../assets/mac.jpg")}
                  style={styles.Image}
                />
                <Row numRows={2}>
                  <Text>MacPro 2019</Text>
                </Row>
              </Row>
            </Row>

            <Row>
              <Row numRows={1}>
                <Image
                  source={require("../../../assets/mac.jpg")}
                  style={styles.Image}
                />
                <Row numRows={2}>
                  <Text>MacPro 2019</Text>
                </Row>
              </Row>
            </Row>
            {/* {itemData.map((item) => {
            return <Item icon={item.icon} />;
          })} */}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// const itemData = [
//   {
//     icon: (
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={{
//           uri: "https://www.technodom.kz/p/noutbuk-apple-macbook-pro-14-mkgq3rua-254635",
//         }}
//       />
//     ),
//   },
//   {
//     icon: (
//       <Image
//         style={{ width: 50, height: 50 }}
//         source={{
//           uri: "",
//         }}
//       />
//     ),
//   },
// ];

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "auto",
    margin: 2,
    bottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
  },
  grid: {
    flex: 1, //num of col I want to see
    marginHorizontal: "auto",
    left: -5, //КАК МОЖНО ПО ДРУГОМУ
    width: 364,
    justifycontent: "center",
    alignself: "center",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
    flex: 1,
    margin: 10,
  },

  item: {
    flex: 1,
    maxWidth: "25%", // 100% devided by the number of rows you want
    // minWidth: 100,
    // maxWidth: 100,
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  Image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default Product;
