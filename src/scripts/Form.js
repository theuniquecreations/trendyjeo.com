/*import React, { useState } from 'react';
import firebase from "../scripts/fbase";

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false, 
    };

    todoRef.push(todo);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <input type="file"/>
      <button onClick={createTodo}  variant="primary">Add Todo</button>
    </div>
  );
}*/