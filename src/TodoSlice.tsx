import { createSlice } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
}
export interface TodoState extends Array<Todo> {}

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
