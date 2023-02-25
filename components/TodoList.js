import React from "react";
import { FlatList, View, Text } from "react-native";

import Todo from "./Todo";

import { todosData } from "../data/todos";

const TodoList = () => {
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
    />
  );
};

export default TodoList;
