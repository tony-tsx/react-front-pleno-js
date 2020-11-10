import React, { useState } from 'react'
import LifeCycle from '../components/LifeCycle'
import LifeCycleFunction from '../components/LifeCycleFunction'

/**
 * Raiz do projeto
 */
export const App = () => {
  const [ count, setCount ] = useState( 0 )
  const [ show, setShow ] = useState( true )

  return (
    <div>
      <button onClick={ () => setShow( !show ) }>
        Ocultar filho como função
      </button>
      <h2>Contador do pai: {count}</h2>
      <div>
        <button onClick={ () => setCount( count + 1 ) }>
          Incrementar contador do pai
        </button>
      </div>
      <LifeCycle count={count}/>
      { show && <LifeCycleFunction count={count} /> }
    </div>
  )
}

export default App