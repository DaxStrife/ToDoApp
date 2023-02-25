import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

import TodoList from "./components/TodoList";

export default function App() {
  return (
    <SafeAreaView>
      <TodoList />
      {/* <Text>Hello there!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
