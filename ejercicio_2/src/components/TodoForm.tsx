const TodoForm = (props : TodoFormProps) => {
    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return <div className="input-group mb-3">
        <input type="text" 
            className="form-control" 
            placeholder="Agregar Tarea"
            value={ props.value }
            onChange={ handleOnChange } />
        <button className="btn btn-outline-secondary" 
            type="button"
            onClick={ props.onAdd }>
            +
        </button>
    </div>
}

interface TodoFormProps {
    value:string
    onChange:(v:string)=>void
    onAdd:()=>void
}

export default TodoForm