'use client';

import { useState } from 'react';

const NewTodoForm = () => {
  const [state, updateState] = useState('');
  console.log('hii');

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewTodoForm;
