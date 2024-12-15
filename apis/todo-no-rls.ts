"use client";

import { clientSupabaseBrowserClient } from "@/lib/client/supabase";

const supabase = clientSupabaseBrowserClient();

export const getTodos = async () => {
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

  return result.data;
};

//todo - 찾기
export const getTodosById = async (id: number) => {
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

//todo - 검색하기
export const getTodosBySearch = async (term: string) => {
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${term}%`)
    .order("id", {
      ascending: false,
    })
    .limit(500);

  return result.data;
};

//todo - 생성
export const createTodos = async (content: string) => {
  const result = await supabase
    .from("todos_no_rls")
    .insert({
      content,
    })
    .select();

  return result.data;
};

//todo - 수정
export const updateTodos = async (id: number, content: string) => {
  const result = await supabase
    .from("todos_no_rls")
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

//todo - soft 삭제
export const deleteTodosSoft = async (id: number) => {
  const result = await supabase
    .from("todos_no_rls")
    .update({
      updated_at: new Date().toISOString(),
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

//todo - harx 삭제
// export const deleteTodosHard = async (id: number) => {
//   const result = await supabase
//     .from("todos_no_rls")
//     .delete()
//     .eq("id", id)
//     .select();

//   return result.data;
// };
