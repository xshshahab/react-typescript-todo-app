import { LuTrash2 } from "react-icons/lu";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div className="space-y-2 flex items-center gap-1">
      <label className="flex grow items-center gap-5 px-5 py-2 transition-shadow border rounded-md border-zinc-600 hover:bg-zinc-800">
        <input
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          type="checkbox"
          className="scale-125 opacity-90 "
        />
        <h2
          className={
            todo.completed
              ? ` line-through text-emerald-500  text-lg font-medium `
              : `text-lg font-medium`
          }
        >
          {todo.title}
        </h2>
      </label>
      <button
        className="p-2 text-red-700 relative bottom-1"
        onClick={() => onDelete(todo.id)}
      >
        <LuTrash2 size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
