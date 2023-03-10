import { StyleSheet, View, Text } from "react-native";

import Checkbox from "./Checkbox";

const Todo = ({ id, text, isCompleted, isToday, hour }) => {
  return (
    <View style={styles.container}>
      <Checkbox id={id} text={text} isCompleted={isCompleted} isToday={isToday} hour={hour} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.time}>{hour}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    color: "#737373",
  },
  time: {
    fontSize: 13,
    color: "#a3a3a3",
    fontWeight: 500,
  },
});
