import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleAddTodo = (title: string) => {
    setTodos((prevTodo) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodo,
    ]);
  };

  const handleTodoDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleDeleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    setTodoCompleted,
    handleAddTodo,
    handleTodoDelete,
    handleDeleteAllCompleted,
  };
};
