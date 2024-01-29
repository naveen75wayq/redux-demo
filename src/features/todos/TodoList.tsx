import { FormEvent, useState } from "react"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Card } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} from "../api/apiSlice";

interface ITodo {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
}

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const {
        data: todos,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetTodosQuery({});

    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({
            userId: 1,
            title: newTodo,
            completed: false,
            
        })
        setNewTodo('');
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FileUploadIcon />
            </button>
        </form>
    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = todos.map((todo: ITodo) => {
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.id.toString()}
                            onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
                        />
                        <label htmlFor={todo.id.toString()}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
                        <DeleteIcon />
                    </button>
                </article>
            )
        })
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}

export default TodoList;