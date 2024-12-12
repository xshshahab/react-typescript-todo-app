import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTodo.trim()) return;
    onSubmit(newTodo);

    setNewTodo("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center overflow-hidden rounded bg-emerald-500"
    >
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full text-zinc-300 placeholder:font-medium placeholder:text-zinc-600 placeholder:text-sm p-2 border outline-none bg-neutral-900 border-zinc-700 focus:border-emerald-500"
        type="text"
        placeholder="What need to be done?"
      />
      <button
        type="submit"
        className="w-16 h-10 font-semibold text-black hover:bg-emerald-400"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
