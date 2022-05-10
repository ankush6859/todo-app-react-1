import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { changeTodoStatus, deleteTodo, Todo } from '../../TodoSlice';
import styles from './TodoItem.module.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const deleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const toggleHandler = (id: string) => {
    dispatch(changeTodoStatus(id));
  };
  return (
    <>
      <div
        className={styles.list_item}
        key={todo.id}
        onMouseEnter={() => setShowDeleteButton(true)}
        onMouseLeave={() => setShowDeleteButton(false)}
        style={
          todo.completed
            ? { textDecoration: 'line-through', color: '#777' }
            : {}
        }
        // onChange={(e) => {
        //   dispatch(
        //     updateTodo({
        //       id: todo.id,
        //       value: e.currentTarget.textContent as string,
        //       completed: todo.completed,
        //     })
        //   );
        // }}
        // contentEditable="true"
      >
        <div className={styles.left}>
          <span
            onClick={() => {
              toggleHandler(todo.id);
            }}
          >
            {todo.completed ? (
              <CheckBoxIcon sx={{ cursor: 'pointer', color: '#820082' }} />
            ) : (
              <CheckBoxOutlineBlankIcon
                sx={{ cursor: 'pointer', color: '#820082' }}
              />
            )}
          </span>
          <span>{todo.value}</span>
        </div>
        {showDeleteButton && (
          <div
            className={styles.right}
            onClick={() => {
              deleteHandler(todo.id);
            }}
          >
            <CloseIcon sx={{ color: '#ff0000e3', cursor: 'pointer' }} />
          </div>
        )}
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default TodoItem;
