import { useState } from 'react' 
import './css/App.css'

function App() {
  const [modalVisisible, setModalVisible] = useState(false)


  return (
    <main className="container">
      <h1 className="title">Administrador de Citas <span className="title-bold">Veterinario</span></h1>
      <button
        type='button'
        className='btn-nueva-cita'
        onClick={() => setModalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>
    </main>
  )
}

export default App


// React virtualiza el DOM utilizando hooks