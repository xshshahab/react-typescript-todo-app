import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const {
    todos,
    handleAddTodo,
    handleDeleteAllCompleted,
    handleTodoDelete,
    setTodoCompleted,
  } = useTodos();

  return (
    <main className="relative w-full h-screen px-2 py-10">
      <div id="intro" className="text-center">
        <h1 className="text-3xl inline-block font-bold  mb-2 border-b-[1px] border-zinc-800">
          Todos
        </h1>
      </div>
      <div id="container" className="max-w-lg mx-auto mt-5 ">
        <AddTodoForm onSubmit={handleAddTodo} />
        <TodoList
          onDelete={handleTodoDelete}
          todos={todos}
          onCompletedChange={setTodoCompleted}
        />
      </div>
      <TodoSummary todos={todos} deleteAllTodos={handleDeleteAllCompleted} />
    </main>
  );
};

export default App;
