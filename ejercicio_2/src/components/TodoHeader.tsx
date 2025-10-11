const TodoHeader = (props : TodoHeaderProps) => {
    return <div>
        <h1>TODOs</h1>
        <div className="row">
            <div className="col">
                <ul>
                    <li>Total: { props.total }  </li>
                    <li>Completadas: { props.done }</li>
                    <li>Pendientes: { props.pending }</li>
                </ul>
            </div>
            <div className="col">
                <div className="form-check form-switch">
                    <input className="form-check-input" 
                        type="checkbox"
                        checked={ props.onlyPending }
                        onChange={ () => {
                            props.onToggleFilter()
                        } }/>
                    <label className="form-check-label" htmlFor="switch">
                        Mostrar solo pendientes
                    </label>
                </div>
            </div>
        </div>
    </div>
}

interface TodoHeaderProps {
    total: number; 
    done: number; 
    pending: number;
    onlyPending: boolean; 
    onToggleFilter: () => void;
  }

export default TodoHeader