import React, { useState } from 'react'
import LifeCycle from '../components/LifeCycle'

/**
 * Raiz do projeto
 */
export const App = () => {
  const [ show, setShow ] = useState( true )
  return (
    <div>
      <div>
        <button onClick={ () => setShow( show => !show ) }>
          { show ? 'Ocultar' : 'Mostrar' }
        </button>
      </div>
      { show && <LifeCycle /> }
    </div>
  )
}

export default App