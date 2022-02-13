const Todo = (props) => {
    const { todos, title, deleteTodo } = props;
    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    }
    return (
        <div className="todo-container">
            <h2>{title}</h2>
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li key={item.id}>
                            {item.name} <span onClick={() => handleDeleteTodo(item.id)}>x</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todo;