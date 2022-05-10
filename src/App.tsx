import React from 'react';
import styles from './App.module.css';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(true);
  const modeHandler = () => {
    setMode(!mode);
  };
  return (
    <div className="App" style={{ background: mode ? '#1a202c' : '#fff' }}>
      <div className={styles.mode}>
        {mode ? (
          <ModeNightIcon onClick={modeHandler} sx={{ color: '#fff' }} />
        ) : (
          <Brightness5Icon onClick={modeHandler} sx={{ color: '#000' }} />
        )}
      </div>
      <div className={styles.main}>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
