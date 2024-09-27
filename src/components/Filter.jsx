import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const Filter = ({ setFilter, filter }) => {
    return (
        <ButtonGroup sx={{ mt: 2 }}>
            <Button variant={filter === "all" ? 'contained' : "outlined"} onClick={() => setFilter('all')}>All</Button>
            <Button onClick={() => setFilter('completed')}>Completed</Button>
            <Button onClick={() => setFilter('pending')}>Pending</Button>
        </ButtonGroup>
    );
};

export default Filter;
