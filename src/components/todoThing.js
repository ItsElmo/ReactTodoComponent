import axios from "axios";
import { useState } from "react";
const Form = () => {
    const [newTodo, setNewTodo] = useState("");
    const [Todos, setTodos] = useState([""]);
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos((Todos) => [...Todos, newTodo]);
        axios.get(https://localhost:c4000/post)
    };
    const deleteItem = (e) => {
        const temp = [...Todos];
        const index = temp.indexOf[e.target.value];
        if (index !== -1) {
            temp.splice(index, 1);
            setTodos(temp);
        }
    };

    return (
        <div className="todoList">
            <h1 className="title">Current Todos</h1>

            {Todos.map((thing, idx) => (
                <li onClick={deleteItem} key="idx" className="todoItem">
                    {thing}
                </li>
            ))}
            <form className="input1" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Add todo"
                    required
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value) && clear()}
                />
                <input className="buttonSubmit" type="submit" value="submit" />
            </form>
            <button onClick={clear}>Clear TO-DO</button>
        </div>
    );
};

export default Form;
