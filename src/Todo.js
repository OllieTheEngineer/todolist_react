import React, {useState} from "react";

const Todo = () => {
    const handleRemove = () => removeTodo(id)
    return (
        <div>
            <div/>
            <button onClick={handleRemove}> Remove Todo Item </button>
        </div>
    )
}

export default Todo;
