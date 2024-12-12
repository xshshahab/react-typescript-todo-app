import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllTodos: () => void;
}

const TodoSummary = ({ todos, deleteAllTodos }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center mt-4 space-y-2">
      <p className="text-sm  text-zinc-500 font-medium">
        {completedTodos.length} /{todos.length} todos completed.
      </p>
      {completedTodos.length > 0 && (
        <button
          className="text-red-600 hover:underline text-sm font-medium"
          onClick={deleteAllTodos}
        >
          Delete all completed
        </button>
      )}
    </div>
  );
};

export default TodoSummary;
