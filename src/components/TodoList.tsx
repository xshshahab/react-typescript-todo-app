import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.id ? 1 : -1;
  });

  return (
    <>
      <div id="todos" className="mt-5 space-y-3 ">
        {todoSorted.map((todo) => {
          return (
            <TodoItem
              onCompletedChange={onCompletedChange}
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
            />
          );
        })}
      </div>
      {todos.length === 0 && (
        <p
          className="text-center text-zinc-700 text-sm font-semibold font-mono"
          id="showtext"
        >
          No todos yet. Add a new one above.{" "}
        </p>
      )}
    </>
  );
};

export default TodoList;
