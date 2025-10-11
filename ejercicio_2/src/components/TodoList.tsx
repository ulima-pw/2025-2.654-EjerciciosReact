import type { Todo } from "../pages/TareasPage"
import TodoItem from "./TodoItem"

const TodoList = (props : TodoListProps) => {
    /*const f = (item : Todo) => {
        return  <TodoItem />
    }*/
    return <table className="table">
        <tbody>
            {
                props.items.map((item : Todo) => {
                    return  <TodoItem item={ item }
                        onToggle={ () => {
                            props.onToggle(item.id)
                        } }
                        onDelete={ () => {
                            props.onDelete(item.id)
                        } }
                    />
                })
            }
        </tbody>
    </table>
}

interface TodoListProps {
    items: Todo[]
    onToggle:(id:string)=>void
    onDelete:(id:string)=>void
}

export default TodoList