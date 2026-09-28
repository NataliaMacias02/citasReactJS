import { useState } from 'react';
import './css/App.css';
import Formulario from './components/Formulario.jsx';

function App() {
  const [visible, setVisible] = useState(false);

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
      {visible && (
        <Formulario
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </main>
  )
}

export default App