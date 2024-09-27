import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <ListItemText
        primary={todo.todo}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TodoItem;
