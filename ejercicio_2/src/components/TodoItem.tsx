import type { Todo } from "../pages/TareasPage";

const TodoItem = (props : TodoItemProps) => {
    return <tr>
        <td>
            <input className="form-check-input" type="checkbox" />
        </td>
        <td>
            {
                props.item.text
            }
        </td>
        <td>
            <button className="btn btn-danger float-end" type="button">
                Eliminar
            </button>
        </td>
    </tr>
}

interface TodoItemProps {
    item: Todo;
    //onToggle: () => void;
    //onDelete: () => void;
  }

export default TodoItem