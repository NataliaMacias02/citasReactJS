import '../css/formulario.css';

const Formulario = ({
    visible,
    setVisible
}) => {

    return (
        <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal-content">
                <div className='formulario-contenido'>
                    <h1 className='formulario-titulo'>Nueva <span className='formulario-titulo-bold'>Cita</span></h1>
                    <button
                        className='btn-cerrar-modal'
                        onClick={() => setVisible(false)}
                    >
                        <span className='btn-texto-cerrar-modal'>Cerrar</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Formulario;