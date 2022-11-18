import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const addTodo = newTodo => {
        setTodo(todo => [...todo, newTodo]);
    }

    const removeTodo = id => {
        setTodo(todo => todo.filter(todos => todos.id !== id));
    }

    const todoContent = todo.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.id}
            remove={removeTodo}
        />
    ))
    return (
        <div>
            <NewTodoForm/>
            <ul>{todoContent}</ul>
        </div>
    )

}

export default TodoList;