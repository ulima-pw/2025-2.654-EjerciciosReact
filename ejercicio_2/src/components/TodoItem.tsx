const TodoItem = () => {
    return <tr>
        <td>
            <input className="form-check-input" type="checkbox" />
        </td>
        <td>
            Tarea 1
        </td>
        <td>
            <button className="btn btn-danger float-end" type="button">
                Eliminar
            </button>
        </td>
    </tr>
}

export default TodoItem