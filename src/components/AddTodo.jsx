import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTodo;
