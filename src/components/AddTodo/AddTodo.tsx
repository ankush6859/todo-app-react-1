import React, { useRef } from 'react';
import { useAppDispatch } from '../../services/hooks/hooks';
import { addTodo } from '../../services/reduxSlice/TodoSlice';
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
  const addTodoButtonHandler = () => {
    if ((inputRef.current?.value.trim() as string).length > 0) {
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
    <>
      <div className={styles.top_heading}>
        <h1>TODO APP</h1>
      </div>
      <div className={styles.input_wrapper}>
        <Card className={styles.addTodo_card}>
          <input
            className={styles.input}
            type="text"
            ref={inputRef}
            onKeyDown={keyPressHandler}
            placeholder="Create a New Todo"
          />
        </Card>
        <button className={styles.button} onClick={addTodoButtonHandler}>
          Add{' '}
        </button>
      </div>
    </>
  );
};

export default AddTodo;
