import { useState } from 'react';
import './css/App.css';
import Formulario from './components/Formulario.jsx';
import Paciente from './components/Paciente.jsx';

function App() {
  const [visible, setVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  /**
   * Definiciones
   * - Para pasar un state a otro componente HIJO debe ser mediante props
   */

  return (
    <main className="container">
      <h1 className="titulo">
        Administrador de Citas <span className="titulo-bold">Veterinario</span>
      </h1>
      <button
        type='button'
        className='btn-nueva-cita'
        onClick={() => setVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

      <Paciente/>
      
      {visible && (
        <Formulario
          visible={visible}
          setVisible={setVisible}
          pacientes={setPacientes}
          setPacientes={setPacientes}
        />
      )}
    </main>
  )
}

export default App