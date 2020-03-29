import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo ,index,completTod ,delettodo}) =>{
 return  <div style={{textDecoration :todo.iscopleted ? 'line-through':""}}  
 className="todo">
   {todo.text}
   <div> 
     <button onClick={()=>{completTod(index)}}>complete</button>
     <button onClick={()=>{delettodo(index)}}>X</button>
   </div>
   </div>;

}
function TodoForm({ addTodo }) { 
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; 
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo "
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  const completTod = index=>{;

    const newtodos =[...todos];
    newtodos[index].iscopleted=true  
    setTodos(newtodos)
  } 
  const delettodo =(index)=>{  
    const newtodos =[...todos];
    newtodos.splice(index,1)
    setTodos(newtodos)
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completTod={completTod} delettodo={delettodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
