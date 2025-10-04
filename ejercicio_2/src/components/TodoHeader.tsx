const TodoHeader = () => {
    return <div>
        <h1>TODOs</h1>
        <div className="row">
            <div className="col">
                <ul>
                    <li>Total: 10</li>
                    <li>Completadas: 2</li>
                    <li>Pendientes: 8</li>
                </ul>
            </div>
            <div className="col">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="switch"/>
                    <label className="form-check-label" htmlFor="switch">
                        Mostrar solo pendientes
                    </label>
                </div>
            </div>
        </div>
    </div>
}

export default TodoHeader