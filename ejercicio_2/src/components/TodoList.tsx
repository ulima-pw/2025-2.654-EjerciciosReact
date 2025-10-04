import TodoItem from "./TodoItem"

const TodoList = () => {
    return <table className="table">
        <tbody>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </tbody>
    </table>
}

export default TodoList