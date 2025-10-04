import TodoForm from "../components/TodoForm"
import TodoHeader from "../components/TodoHeader"
import TodoList from "../components/TodoList"

const TareasPage = () => {
    return <div className="container">
        <TodoHeader />
        <hr />
        <TodoForm />
        <TodoList />
    </div>
}

export default TareasPage