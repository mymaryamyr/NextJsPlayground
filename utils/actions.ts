'use server';
import { revalidatePath } from 'next/cache';
import db from '../utils/db';

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  });
};

export const newTodo = async (data: FormData) => {
  const newTodo = data.get('todo') as string;

  if (newTodo) {
    await db.todo.create({
      data: {
        constent: newTodo,
      },
    });
    revalidatePath('/todos');
  }
};
