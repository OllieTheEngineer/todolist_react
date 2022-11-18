import React, {useState} from "react";
import {v4 as uuid} from "uuid"

const NewTodoForm = ({newTodo}) => {
    const [todo, setTodo] = useState ("");

    const handleChange = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newTodo({todo, id: uuid()});
        setTodo("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo:</label>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    onChange={handleChange}
                    value={todo} />
                <button> Add Todo Item!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;