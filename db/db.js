//create a javascript object to create a dummy database
const todos = [
    {
        id: 1, 
        title: "lunch",
        description: "Go for lunch by 2pm"
    }
];

export default todos;

//import express
import express from 'express';
import db from './db/db';

// Set up the express app
const app = express();

// get all todos
app.get('/api/v1/todos', (req, res) => {
    //200 indicates a successful request
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});