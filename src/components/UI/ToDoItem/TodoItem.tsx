import React, { ChangeEvent, FC } from 'react';

// import types;
import { IToDo } from 'types/types';

//importing styles from scss;
import classes from './todoitem.module.scss';

// import UI components from antd;
import { List, Typography, Button, Input, Form } from 'antd';

// import icons from antd-icon;
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';

// creating interface for props;
interface IToDoItemProps {
    todo: IToDo;
    handleDelete: (id: number) => void;
    handleDone: (id: number, status: boolean) => void;
    handleEdit: (id:number, newValue: string) => void;
    handleSetChangeTodo: (id: number) => void;
    currentChangeTodo: boolean;
}

const TodoItem:FC<IToDoItemProps> = ({ todo, currentChangeTodo, handleSetChangeTodo, handleDelete, handleEdit, handleDone }) => {

  // state for  value of current todo;
  const [ newValue, setNewValue ] = useState<string>(todo.title);

  // function for changing value of current todo;
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };

  return (
    // checking in list to current todo (if currentTodo is true list will be return input for change with buttons);
    currentChangeTodo ?
      <Form className={classes.changeBlock}>
        <Input value={newValue} onChange={handleChangeValue} placeholder='Change you To Do' />
        <Button htmlType='submit' type='primary' disabled={ newValue.length <= 0} onClick={() => handleEdit(todo.id, newValue)}>Save</Button>
        <Button onClick={() => handleSetChangeTodo(0)} danger>Cancel</Button>
      </Form>
      :
      <div>
        <List.Item actions={[ <Button onClick={() => handleSetChangeTodo(todo.id)} type='primary' ghost>Edit <EditOutlined /></Button>,
          <Button type='primary' onClick={() => handleDone(todo.id, todo.completed)} className={classes.done}>Done <CheckOutlined /></Button>,
          <Button onClick={() => handleDelete(todo.id)} type='primary' danger>Delete <DeleteOutlined /></Button> ]}>
          <Typography.Text delete={todo.completed}>{todo.title}</Typography.Text>
        </List.Item>
      </div>

  );
};

export default TodoItem;
