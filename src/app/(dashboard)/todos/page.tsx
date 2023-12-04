import prisma from '../../../../utils/db';
import TodoList from '@/app/components/TodoList';

const getData = async () => {
  const todos = await prisma.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  console.log('todos');

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
