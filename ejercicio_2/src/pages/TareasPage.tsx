import { useEffect, useState } from "react"
import TodoForm from "../components/TodoForm"
import TodoHeader from "../components/TodoHeader"
import TodoList from "../components/TodoList"

export interface Todo {
    id: string
    text: string 
    done: boolean
}

const TareasPage = () => {
    const [valorTexto, setValorTexto ] = useState<string>("")
    const [listaTodos, setListaTodos] = useState<Todo[]>([])
    const [onlyPending, setOnlyPending] = useState<boolean>(false)

    const obtenerTodos = async () => {
        const resp = await fetch("https://script.google.com/macros/s/AKfycbwgeI_73PDATECHnJOiRDm6UtL30vnl_iaRjPUXMCgEFeiJpgRImv4sK5wOc4_o3N-ywg/exec?entity=654")
        const data = await resp.json()
        setListaTodos(data)
    }

    useEffect( () => {
        obtenerTodos()
    }, [] )

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