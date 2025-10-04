const TodoForm = () => {
    return <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Agregar Tarea" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            +
        </button>
    </div>
}

export default TodoForm