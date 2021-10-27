import React,{useRef} from 'react';//useref is hooks from react which can be executed in function components,to add certain functionality to a component
import './NewTodo.css';
//we are setting a type definition of the prop
type NewTodoProps ={
    onAddTodo:(todoText:string) =>void;
};


/**/ 
const NewTodo:React.FC<NewTodoProps> = props=> {

    const textInputRef=useRef<HTMLInputElement>(null);
  // the function below will be excuted when the form below is submitted,its bined onto the form tag
    const todoSubmitHandler= (event:React.FormEvent) =>{
        event.preventDefault();//preventing a request going to the server requesting for this app
        //this will be handled in javascript
        
        const enteredText=textInputRef.current!.value;//this will be set not to a null
        console.log(enteredText);
        
        props.onAddTodo(enteredText);
    };

    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add TODO</button>
    </form>
};
export default NewTodo;
