import React from 'react';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../TodoSlice';
import Card from '../UI/Card';
import styles from './TodoList.module.css';
import { useState } from 'react';

const TodoList = () => {
  const [filter, setFilter] = useState(0);
  const buttonList = ['All', 'Active', 'Completed'];

  const todos = useAppSelector((state: RootState) => state.todos);
  let filteredTodo = todos;
  if (filteredTodo.length === 0) {
    return (
      <Card className={styles.not_found}>
        <h3>Nothing found for the day!! </h3>
      </Card>
    );
  }

  if (filter === 0) {
    filteredTodo = todos;
  } else if (filter === 1) {
    filteredTodo = todos.filter((todo) => todo.completed === false);
  } else {
    filteredTodo = todos.filter((todo) => todo.completed === true);
  }
  return (
    <Card style={{ marginTop: '1rem' }}>
      <div>
        {filteredTodo &&
          filteredTodo.map((todo: Todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
      </div>
      <div className={styles.navigation}>
        <div className={styles.total_count}>
          {`${filteredTodo.length} tasks remaining`}
        </div>
      </div>
    </Card>
  );
};

export default TodoList;
