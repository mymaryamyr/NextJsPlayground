'use client';
import { useTransition } from 'react';
import { completeTodo } from '../../../utils/actions';

const Todo = ({
  todo,
}: {
  todo: { completed: boolean; constent: String; id: string };
}) => {
  const [isPending, startTransition] = useTransition();

  console.log(todo);

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.constent}
    </div>
  );
};

export default Todo;
