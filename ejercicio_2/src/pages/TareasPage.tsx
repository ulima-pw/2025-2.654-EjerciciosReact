import TodoForm from "../components/TodoForm"
import TodoHeader from "../components/TodoHeader"
import TodoList from "../components/TodoList"

export interface Todo {
    id: string
    text: string 
    done: boolean
}

const todos : Todo[] = [
    {id : "1", text : "Hacer compras", done : false },
    {id : "2", text : "Estudiar", done : true },
    {id : "3", text : "Reunirme para el trabajo", done : false }
]

const TareasPage = () => {
    return <div className="container">
        <TodoHeader />
        <hr />
        <TodoForm />
        <TodoList items={ todos } />
    </div>
}

export default TareasPage