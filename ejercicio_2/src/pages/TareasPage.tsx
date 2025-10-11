import { useState } from "react"
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
    const [valorTexto, setValorTexto ] = useState<string>("")
    const [listaTodos, setListaTodos] = useState<Todo[]>([])

    return <div className="container">
        <TodoHeader />
        <hr />
        <TodoForm value={ valorTexto }
            onChange={ (v : string) => {
                setValorTexto(v)
            } }
            onAdd={ () => {
                const listaClonada = [...listaTodos]
                listaClonada.push({
                    id : new Date().getTime().toString(),
                    text : valorTexto,
                    done : false
                })
                setListaTodos(listaClonada)
            } } />
        <TodoList items={ listaTodos } />
    </div>
}

export default TareasPage