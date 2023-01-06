import { IToDo } from 'types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToDos, createTodo, updateTodo, deleteTodo, } from 'features/todoFeatures';

// interface for initialState;
interface TodoState {
    todos: IToDo[];
    isLoading: boolean;
    error: any;
}

// default name of slice;
const name = 'todos';

// initial state for reducer;
const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: '',
};

// creating slice for todos;
export const todoSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // extra reducers for function getTodos;
    builder.addCase(getToDos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToDos.fulfilled, (state, action: PayloadAction<IToDo[]>) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(getToDos.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;

    });

    // extra reducers for function createTodo;
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action: PayloadAction<IToDo>) => {
      state.todos.push(action.payload);
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;

    });

    // extra reducers for function update todo;
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action: PayloadAction<IToDo>) => {
      state.isLoading = false;
      const currentIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[ currentIndex ] = {
        ...state.todos[ currentIndex ],
        ...action.payload
      };
      state.error = '';
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;

    });

    // extra reducers for function delete todo;
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.error = '';
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

  }
});

export default todoSlice.reducer;
