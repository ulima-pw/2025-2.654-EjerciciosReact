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
    const [onlyPending, setOnlyPending] = useState<boolean>(false)

    return <div className="container">
        <TodoHeader total={ listaTodos.length }
            done={ listaTodos.filter( ( todo : Todo) => { 
                return todo.done == true 
            }).length }
            pending={ listaTodos.filter( ( todo : Todo) => { 
                return todo.done == false 
            }).length }
            onlyPending={ onlyPending }
            onToggleFilter={ () => {
                setOnlyPending(!onlyPending)
            } }  />
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
                setValorTexto("")
            } } />
        <TodoList 
            items={ 
                onlyPending ? 
                    listaTodos.filter( (todo : Todo) => { return todo.done != true } ) :
                    listaTodos
            }
            onToggle={ (id : string) => {
                const listaClonada = [...listaTodos]
                for (let todo of listaClonada ) {
                    if (todo.id == id) {
                        todo.done = !todo.done
                    }
                }
                setListaTodos(listaClonada)
            } }
            onDelete={ (id:string) => {
                const listaFiltrada = listaTodos.filter( (todo : Todo) => {
                    return todo.id != id
                } )
                setListaTodos(listaFiltrada)
            } } />
    </div>
}

export default TareasPage