import type { Todo } from "../pages/TareasPage";

const TodoItem = (props : TodoItemProps) => {
    return <tr>
        <td>
            <input className="form-check-input" 
                type="checkbox"
                checked={ props.item.done }
                onChange={ () => {
                    props.onToggle()
                } } />
        </td>
        <td>
            {
                props.item.text
            }
        </td>
        <td>
            <button className="btn btn-danger float-end" 
                type="button"
                onClick={ () => {
                    props.onDelete()
                } }>
                Eliminar
            </button>
        </td>
    </tr>
}

interface TodoItemProps {
    item: Todo;
    onToggle: () => void;
    onDelete: () => void;
  }

export default TodoItem