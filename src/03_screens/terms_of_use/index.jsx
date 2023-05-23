import { Text, ScrollView, StyleSheet } from "react-native";

const TermsOfUseScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms of Use</Text>
      <Text style={styles.text}>//Terms of Use content goes here</Text>
      <Text style={styles.text}>//Terms of Use content goes here</Text>
      <Text style={styles.text}>//Terms of Use content goes here</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default TermsOfUseScreen;
