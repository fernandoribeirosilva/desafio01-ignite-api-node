const express = require('express');
const cors = require('cors');

const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const existUser = users.find(user => user.username === username);
  if (!existUser) {
    return response.status(404).json({ error: "Usuário não existe!" });
  }

  request.user = existUser;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return response.status(400).json({ error: "Usuário já existe!" });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  }

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { todos } = request.user;

  return response.status(200).json(todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  }

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { title, deadline } = request.body;

  const existTodo = user.todos.find(todo => todo.id === id);
  if (!existTodo) {
    return response.status(404).json({ error: "TODO não existe!" })
  }

  existTodo.title = title;
  existTodo.deadline = new Date(deadline);

  return response.status(200).json(existTodo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const existTodo = user.todos.find(todo => todo.id === id);
  if (!existTodo) {
    return response.status(404).json({ error: "TODO não existe!" })
  }

  existTodo.done = true;

  return response.status(200).json(existTodo);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const existTodo = user.todos.findIndex(todo => todo.id === id);
  if (existTodo === -1) {
    return response.status(404).json({ error: "TODO não existe!" })
  }

  user.todos.splice(existTodo, 1);

  return response.status(204).send();
});

module.exports = app;