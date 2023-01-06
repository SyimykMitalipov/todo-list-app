import { createAsyncThunk } from '@reduxjs/toolkit';
import { requester } from 'requester';
import { IToDo } from 'types/types';

// type for todo requests param;
interface IToDoFeatures {
    id?: number;
    completed?: boolean;
    title?: string;
}

const name = 'todos';

// creating default endpoint for request;
const ENDPOINTS = { TODOS: '/todos', };

// request for get all todos;
export const getToDos = createAsyncThunk(
  `${name}/getTodos`,
  async (_,) => {
    const response = await requester.get<IToDo[]>(ENDPOINTS.TODOS);
    return response.data;
  }
);

// request for create new todo;
export const createTodo = createAsyncThunk(
  `${name}/createTodos`,
  async (todo:IToDoFeatures) => {
    const response = await requester.post(ENDPOINTS.TODOS, todo);
    return response.data;
  }
);

// request for update todo;
export const updateTodo = createAsyncThunk(
  `${name}/updateTodos`,
  async (todo:IToDoFeatures) => {
    const response = await requester.patch(`${ENDPOINTS.TODOS}/${todo.id}`, todo);
    return response.data;
  }
);

// request for delete todo;
export const deleteTodo = createAsyncThunk(
  `${name}/deleteTodos`,
  async ({ id }:IToDoFeatures) => {
    await requester.delete(`${ENDPOINTS.TODOS}/${id}`);
    return id;
  }
);
