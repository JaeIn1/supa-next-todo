"use client";

import {
  createTodos,
  deleteTodosSoft,
  getTodos,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todo-no-rls";
import { useEffect, useState } from "react";
import { Database } from "@/types/supabase";

type typeDTO = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = () => {
  const [todos, setTodos] = useState<typeDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // todo get
  const onGetTodos = async () => {
    setLoading(true);

    try {
      const resultTodos = await getTodos();
      if (resultTodos) setTodos(resultTodos);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  // todo create
  const onCreateTodos = async (content: string) => {
    await createTodos(content);
    await onGetTodos();
  };

  // todo update
  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodos(id, content);
    await onGetTodos();
  };

  // todo delete
  const onDeleteTodos = async (id: number) => {
    await deleteTodosSoft(id);
    await onGetTodos();
  };

  // todo search
  const onSearchTodos = async (term: string) => {
    if (term) {
      const todoResult = await getTodosBySearch(term);
      if (todoResult) setTodos(todoResult);
    } else {
      await onGetTodos();
    }
  };

  return {
    loading,
    todos,
    onCreateTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  };
};

export default useTodosController;
