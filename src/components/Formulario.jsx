import '../css/formulario.css';
import { useState } from 'react';

const Formulario = ({
    visible,
    setVisible,
    pacientes,
    setPacientes
}) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    /**
     * Actividdad
     * Crear 5 nuevos states
     * Crear 5 nuevos input
     * Nombre propietario
     * Correo
     * Teléfono
     * Fecha alta
     * Sintomas (descripión)
     * 
     * Types
     * - date
     * - tel
     * - email
     * Inputs
     * -input
     * -textarea
     * 
     */

    const handleCita = (e) => {
        e.preventDefault();

        // Validation - All fields are required
        //if(nombrePaciente && nombrePropietario && correo && telefono && fecha && sintomas !== '') {
        //    console.log('Todos los campos son requeridos');
        //    return;
        //}

        if([nombrePaciente.trim(), nombrePropietario.trim(), correo.trim(), telefono.trim(), fecha.trim(), sintomas.trim()].includes('')) {
            window.alert('Error: Todos los campos son obligatorios');
            return;
        }

        const pacienteAlta = {
            nombrePaciente: nombrePaciente.trim(),
            nombrePropietario: nombrePropietario.trim(),
            correo: correo.trim(),
            telefono: telefono.trim(),
            fecha,
            sintomas: sintomas.trim()
        };
        console.log(pacienteAlta)

        // Add id
        pacienteAlta.id = Date.now();
        console.log(pacienteAlta)
        // Guardar mi objeto de paciente
        setPacientes([...pacientes, pacienteAlta]);
        // Cerrar la ventana de nueva cita
        setVisible(false)
    }

    return (
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">

                <div className="formulario-contenido">

                    <h1 className="formulario-titulo">
                        Nueva <span className="formulario-titulo-bold">Cita</span>
                    </h1>

                    <button
                        className="btn-cerrar-modal"
                        onClick={(e) => setVisible(false)}
                    >
                        <span className="btn-texto-cerrar-modal">
                            Cerrar
                        </span>
                    </button>

                    <form onSubmit={(e) => handleCita(e)}>
                        {/*Nombre Paciente*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="paciente"
                                className="formulario-label"
                            >
                                Nombre Paciente
                            </label>

                            <input
                                id="paciente"
                                type="text"
                                className="formulario-input"
                                placeholder="Nombre Paciente"
                                value={nombrePaciente}
                                onChange={(e) => setNombrePaciente(e.target.value)}
                            />
                        </div>

                        {/*Nombre Propietario*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="propietario"
                                className="formulario-label"
                            >
                                Nombre Propietario
                            </label>

                            <input
                                id="nombrePropietario"
                                type="text"
                                className="formulario-input"
                                placeholder="Nombre Propietario"
                                value={nombrePropietario}
                                onChange={(e) => setNombrePropietario(e.target.value)}
                            />
                        </div>

                        {/*Correo*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="correo"
                                className="formulario-label"
                            >
                                E-mail
                            </label>

                            <input
                                id="correo"
                                type="email"
                                className="formulario-input"
                                placeholder="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>

                        {/*Teléfono*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="telefono"
                                className="formulario-label"
                            >
                                Teléfono
                            </label>

                            <input
                                id="telefono"
                                type="tel"
                                className="formulario-input"
                                placeholder="449 155 7080"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>

                        {/*Fecha Alta*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="fecha"
                                className="formulario-label"
                            >
                                Fecha
                            </label>

                            <input
                                id="fecha"
                                type="date"
                                className="formulario-input"
                                placeholder="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                        </div>

                        {/*Sintomas*/}
                        <div className="formulario-campo">

                            <label
                                htmlFor="fecha"
                                className="formulario-label"
                            >
                                Síntomas
                            </label>

                            <textarea
                                id="sintomas"
                                type="text"
                                className="formulario-input"
                                placeholder="Síntomas"
                                value={sintomas}
                                onChange={(e) => setSintomas(e.target.value)}
                                rows={4}
                            />
                        </div>

                        <button
                            type='submit'
                            className='formulario-btn-submit'
                        >Agregar Paciente</button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Formulario;

/* 
useState = la "memoria" donde React guarda el dato
valor1= valor actual de la variable/ es una variable que almacena el valor del state
valor2 (set) = actualiza el valor del state
useState() = valor inicial

value = conecta esa memoria con el input.
onChange = escucha cuando el usuario cambia algo.
setCorreo() = modifica la memoria.
*/