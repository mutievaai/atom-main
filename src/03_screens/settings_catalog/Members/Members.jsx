import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

export default function App() {
  return (
    <View style={styles.container}>
        <Row>
            <Row numRows={1}>
                <Icon></Icon>
            <Row numRows={2}>

            </Row>
                <Text></Text>
        </Row>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

});
