import React from 'react';//import react is provided the react types package(if you go into the node modules package we see the at types folder it should contain a react folder)
import './TodoList.css';
//you have to be clear about the property types you are working with--the property type and structure
interface ToDoListProps{
  items:{id:string,text:string}[];//we are passing an array of objects with id and a string
  onDeleteTodo:(id:string)=> void;
}
const App: React.FC<ToDoListProps> = props => {
  return (
    /*we are rendering a unordered list*/ 
    /*key-the key is a special property which react will want on repeated elements*/ 
    <ul>
      {props.items.map(todo=>(
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};
export default App;