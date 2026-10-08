import '../css/Paciente.css';



const Paciente = ({ paciente, setVisible }) => {

    //funcion para editar de manera generica
    const handleEditar = () => {
        // Abrir el modal
        setVisible(true);
        //console.log que imprima el array de tarjetas (pacientes)
        console.log(paciente);
    };
    return (
        <div className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.nombrePaciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}
                >Editar</button>
                <button
                    className="paciente-btn paciente-btn-eliminar"
                    onClick={() => setVisible(false)}
                >Eliminar</button>
            </div>
        </div>
    );
};

export default Paciente;