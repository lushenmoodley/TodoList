import React,{useState} from 'react';//import react is provided the react types package(if you go into the node modules package we see the at types folder it should contain a react folder)
import TodoList from './components/TodoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';//we are exporting an interface

const App: React.FC = () => {
  
  const [todos,setTodos]=useState<Todo[]>([]);//our state will be made up of an array of objects


  //the function below will be called from the newtodo component
  const todoAddHandler= (text:string) =>{
    console.log(text);
    setTodos(prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}]);
  };

  //the function below will be called from the newtodo component
  const todoDeleteHandler= (todoId:string) =>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.id !==todoId);
    });
  };

  return <div className="App">
    {/*A component that add todos,the below code we are passing props using item*/ }
    <NewToDo onAddTodo={todoAddHandler}/>
    <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
  </div>
};

export default App;
