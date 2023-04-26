import { useState } from 'react'

const Todos = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);
    const [buttonText, setButtonText] = useState('Submit');

    const [todos, setTodos] = useState(() => {
        const storedTodo = localStorage.getItem('todos');
        return storedTodo ? JSON.parse(storedTodo) : [];
    });

    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleNewToDoSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) return;

        if (editingTodo !== null) {
            const updateToDo = todos.map((todo) => {
                if (todo.id === editingTodo) {
                    return { ...todo, text: newTodo }
                } else {
                    return todo;
                }
            })
            setTodos(updateToDo);
            setEditingTodo(null);
            setNewTodo('');
            setButtonText('Submit');
        } else {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo('')
        }
    }

    localStorage.setItem('todos', JSON.stringify(todos));

    const handleDeleteToDo = (id) => {
        const updateToDos = todos.filter((item) => item.id !== id);
        setTodos(updateToDos);
    }
    const handleEditToDo = (id) => {
        const toDoEdit = todos.find((todo) => todo.id === id);
        setEditingTodo(id);
        setNewTodo(toDoEdit.text);
        setButtonText('Save');
    }
    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleNewToDoSubmit}>
                <label>
                    Name:
                    <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                </label>
                <button type='submit'>{buttonText}</button>
                {
                    editingTodo !== null && (
                        <button type='button' onClick={() => setEditingTodo(null)}>Cancel</button>
                    )
                }
            </form>
            <ul>
                {
                    todos.map((item) => (
                        <li key={item.id}>
                            <span>{item.text}</span>
                            <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
                            <button onClick={() => handleEditToDo(item.id)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos;