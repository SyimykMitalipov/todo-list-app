import React, { useState, useEffect } from 'react';

// import custom components;
import TodoItem from 'components/UI/ToDoItem/TodoItem';
import { AddPanel } from 'components/UI/AddPanel';

// import global types;
import { IToDo } from 'types/types';

// importing redux hooks;
import { useAppDispatch, useAppSelector } from 'hooks/redux';

// import features of project;
import { deleteTodo, getToDos, updateTodo, createTodo } from 'features/todoFeatures';

// import styles from scss;
import classes from './home.module.scss';

// import UI components from antd;
import { List, Typography } from 'antd';

const Home = () => {
  // state for find current changing todo;
  const [ changeTodo, setChangingTodo ] = useState<number>();

  // calling dispatch hook;
  const dispatch = useAppDispatch();

  /// getting todos and state from store;
  const { todos, error } = useAppSelector(state => state.todoReducer);

  // fetching todos;
  useEffect(() => {
    dispatch(getToDos());
  }, [ dispatch ]);

  //function for dispatch delete function;
  const handleDelete = (id: number) => {
    dispatch(deleteTodo({ id: id }));
  };

  //function for create new todo;
  const handleCreate = (todo: string) => {
    dispatch(createTodo({
      title: todo,
      completed: false,
    }));
  };

  // function for dispatch change status of todo || completed;
  const handleDone = (id:number, status: boolean) => {
    dispatch(updateTodo({ id: id, completed: !status }));
  };

  // function for change current editing todo;
  const handleSetChangeTodo = (id: number) => {
    setChangingTodo(id);
  };

  // function for dispatch edit function;
  const handleEdit = (id: number, newValue: string) => {
    dispatch(updateTodo({
      id: id,
      title: newValue
    }));
    setChangingTodo(0);
  };

  return (
    <>
      {error && <h2>Error</h2>}
      <div className={classes.main}>
        <Typography.Title>ToDo List</Typography.Title>

        {/*       Add panel         */}
        <AddPanel handleCreate={handleCreate} />
        {/* ********************** */}

        {/* Using List comp for rendering TodoItems */}
        <List className={classes.listOfTodo}
          dataSource={todos} bordered
          renderItem={(todo: IToDo) =>
            // return TodoItems
            <TodoItem
              handleDelete={handleDelete}
              handleDone={handleDone} todo={todo}
              handleEdit={handleEdit}
              handleSetChangeTodo={handleSetChangeTodo}
              currentChangeTodo={changeTodo === todo.id}
              key={todo.id} /> } />
      </div>
    </>
  );
};

export default Home;
