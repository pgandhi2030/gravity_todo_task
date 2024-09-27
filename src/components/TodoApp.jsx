import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import axios from 'axios';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        if (localStorage.getItem('todos')) {
            // Load todos from local storage
            const savedTodos = JSON.parse(localStorage.getItem('todos'));
            if (savedTodos.length > 0) {
                setTodos(savedTodos);
            }
        } else {

            // fetch initial list of todos form api
            axios.get('https://dummyjson.com/todos').then((response) => {
                setTodos(response.data.todos)
            })
        }
    }, []);



    // Save todos to local storage when they change
    useEffect(() => {
        if (todos?.length >= 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([{ id: Date.now(), todo: todo, completed: false }, ...todos]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos?.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        const tempTodos = [...todos]
        const index = tempTodos?.findIndex(a => a["id"] === id)
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
    };

    const filteredTodos = todos?.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" align="center">
                    To-Do List
                </Typography>
                <AddTodo addTodo={addTodo} />
                <Filter setFilter={setFilter} />
                <TodoList
                    todos={filteredTodos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            </Box>
        </Container>
    );
};

export default TodoApp;
