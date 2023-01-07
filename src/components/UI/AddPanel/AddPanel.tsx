import React, { FC, ChangeEvent, useState } from 'react';

// importing UI components from antd;
import { Input, Form, Button } from 'antd';

// import icons from antd-design;
import { PlusOutlined } from '@ant-design/icons';
// import styles from scss;
import classes from './addpanel.module.scss';

// type for props;
interface IAddPanelProps {
  handleCreate: (todo:string) => void;
}

const AddPanel:FC<IAddPanelProps> = ({ handleCreate }) => {

  // state for new todo;
  const [ newTodo, setNewTodo ] = useState<string>('');

  // function for change newtodoState
  const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAdd = () => {
    handleCreate(newTodo);
    setNewTodo('');
  };
  return (
    <Form className={classes.addPanel}>
      <Input value={newTodo} onChange={handleChangeTodo} placeholder='You can add new To Do' />
      <Button htmlType='submit' disabled={ newTodo.length <= 0 } onClick={handleAdd} type='primary'>Add <PlusOutlined /></Button>
    </Form>
  );
};

export default AddPanel;
