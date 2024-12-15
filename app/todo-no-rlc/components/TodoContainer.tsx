"use client";

import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

export default function TodoContainer() {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList shareName="JaeIn" />
    </div>
  );
}
