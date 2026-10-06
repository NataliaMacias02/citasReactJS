import '../css/Paciente.css'

const Paciente = () => {
    return
    <div className="paciente-card">
        <p className="paciente-label">Paciente:
            <span className="paciente-nombre"></span>
        </p>
        <p className="paciente-fecha"></p>

        <div className="paciente-contenedor-botones">
            <button 
                className="paciente-btn-paciente-btn-editar">
            Editar</button>
            <button 
                className="paciente-btn-paciente-btn-eliminar"
            >Eliminnar</button>
        </div>

    </div>
}

export default Paciente;