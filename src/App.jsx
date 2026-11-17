import { useState } from 'react';
import './css/App.css';
import Formulario from './components/Formulario.jsx';
import Paciente from './components/Paciente.jsx';

function App() {
  const [visible, setVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [editPaciente, setEditPaciente] = useState({}); //se inicializa como un array de objetos

  /**
   * Definiciones:
   * - Para pasar un state a otro componente HIJO
   *   debe ser mediante props
   */

  const editarPaciente = (id) => {
    // Obtener el objeto del paciente por id 
    const pacienteEditar = pacientes.filter((paciente) =>paciente.id === id);
    // hacer un nuevo state y guardar el nuevo valor pacienteEditar
    setEditPaciente(pacienteEditar[0]);
  }
  // se pone cero porque solo reetorna uno por el filter, es decir, accedemos a la primera posición

  const eliminarPaciente = (id) => {
    const confirmar = window.confirm("¿Deseas eliminar este paciente? Una vez eliminado ya no se puede recuperar");

    console.log(confirmar)
    if (confirmar) {
      const pacienteEliminado = pacientes.filter((paciente) => paciente.id !== id); // se crea el array sin el id que queremos eliminar
      setPacientes(pacienteEliminado); // actualizamos el valor del state
    }
  }

  return (
    <main className="container">

      <h1 className="titulo">
        Administrador de Citas <span className="titulo-bold">Veterinario</span>
      </h1>

      <button
        type="button"
        className="btn-nueva-cita"
        onClick={() => {
          setEditPaciente({});
          setVisible(true);
        }}
      >
        <span className="btn-texto-nueva-cita">Nueva Cita</span>
      </button>

      {pacientes.map((paciente) => ( // el map para mostrar las tarjetas de cada uno de los pacientes
        <Paciente
          setVisible={setVisible}
          pacientes={pacientes}
          paciente={paciente}
          editPaciente={editPaciente}
          eliminarPaciente={eliminarPaciente}
          key={paciente.id}
          setEditPaciente={setEditPaciente}
          editarPaciente={editarPaciente}
        />
      ))}

      {visible && (
        <Formulario
          visible={visible}
          setVisible={setVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          editPaciente={editPaciente} 
          setEditPaciente={setEditPaciente}
        />
      )} {/** viene del state */}

    </main>
  );
}

export default App;

// el primer valor contine el valor del state
// el segundo valor acctualiza el state