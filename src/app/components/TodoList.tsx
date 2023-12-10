import React, { FC } from 'react';
import Todo from './Todo';

interface TodoItem {
  id: string;
  constent: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
