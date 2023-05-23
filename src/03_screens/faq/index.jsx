import { Text, ScrollView, StyleSheet } from "react-native";

const FAQScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <Text style={styles.text}>// FAQ content goes here</Text>
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

export default FAQScreen;
