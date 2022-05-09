import React, { useRef } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from '../../TodoSlice';
import Card from '../UI/Card';
import styles from './AddTodo.module.css';

const AddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      dispatch(
        addTodo({
          id: String((Math.random() * 100).toFixed(0)),
          value: inputRef.current?.value as string,
          completed: false,
        })
      );
      inputRef.current!.value = '';
    }
  };

  return (
    <Card className={styles.addTodo_card}>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        onKeyDown={keyPressHandler}
        placeholder="Create a New Todo"
      />
    </Card>
  );
};

export default AddTodo;
