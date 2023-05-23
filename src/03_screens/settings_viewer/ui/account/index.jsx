import { View, ScrollView, StyleSheet, Text } from "react-native";
import { InputDefault } from "../../../../07_shared";
import { useState } from "react";

const Account = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.avatarField}>
        <View style={s.avatar} />
      </View>
      <View style={s.input}>
        <InputDefault placeholder={"First name"} set={setFirstname} />
      </View>
      <View style={s.input}>
        <InputDefault placeholder={"Last name"} set={setLastname} />
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  avatarField: {
    flex: 1,
    padding: 45,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#F2F2F7",
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  input: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Account;
