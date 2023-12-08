import db from '../../../../utils/db';
import TodoList from '@/app/components/TodoList';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
