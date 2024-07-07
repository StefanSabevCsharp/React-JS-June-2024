import { useEffect, useState } from "react";
import TodoItem from "./ToDoItem";

export default function ToDoList() {
    const [todos, setTodos] = useState([]);

    const baseUrl = "http://localhost:3030/jsonstore/todos";

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setTodos(Object.values(data));
            });
    });

    const changeStatusHandler = (id) => {
        const todo = todos.find(todo => todo._id === id);

        fetch(`${baseUrl}/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isCompleted: !todo.isCompleted }),
        });

        setTodos( oldTodos => oldTodos.map(todo => todo._id === id ? {...todo, isCompleted: !todo.isCompleted} : todo));

    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => 
                        <TodoItem
                            key={todo._id}
                            id={todo._id} 
                            text={todo.text} 
                            isCompleted={todo.isCompleted} 
                            changeStatusHandler={changeStatusHandler}
                         /> )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
