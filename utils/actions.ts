'use server';
import { revalidatePath } from 'next/cache';
import db from '../utils/db';

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  });
};

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: { constent: formData.get('content') },
  });

  revalidatePath('/todos');
};
