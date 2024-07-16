import { useState } from 'react';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTodo = (): void => {
    if (newTask) {
      const todo: Todo = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTask('');
    }
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  return (
    <Container>
      <h2>Todo List Application</h2>
      <Form.Group className="mb-3" controlId="addTodo">
        <Form.Label>Add Task:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <Button className="mt-2" onClick={addTodo}>
          Add Task
        </Button>
      </Form.Group>
      <ListGroup>
        {todos.map((todo, idx) => (
          <div key={idx}>
            <ListGroup.Item>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.name}
              </span>
              <Button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                <i className="bi bi-trash3-fill"></i>
              </Button>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Completed"
                  onClick={() => toggleTodo(todo.id)}
                />
              </Form.Group>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </Container>
  );
};
export default TodoList;
