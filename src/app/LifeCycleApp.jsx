import React, { useState } from 'react'
// import LifeCycle from '../components/LifeCycle'
import LifeCycleFunction from '../components/LifeCycleFunction'

/**
 * Raiz do projeto
 */
export const App = () => {
  const [ show, setShow ] = useState( true )

  return (
    <div>
      <button onClick={ () => setShow( !show ) }>
        { show ? 'Ocultar filho como função' : 'Mostrar filho como função' }
      </button>
      { show && <LifeCycleFunction  /> }
    </div>
  )
}

export default App