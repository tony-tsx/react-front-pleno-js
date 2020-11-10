import React, { useState, useEffect } from 'react'

const LifeCycleFunction = ( props ) => {
  const [ count, setCount ] = useState( 0 )

  useEffect( () => {
    console.log( 'semelhante ao componentDidMount' )
    return () => {
      console.log( 'semelhante ao componenteWillUnmount' )
    }
  }, [ count ] )

  return (
    <div>
      <h2>Contador do filho como função: {count}</h2>
      <button onClick={ () => setCount( count + 1 ) }>Incrementar contado do filho como função</button>
      <div>
        <h1>
          Multiplicação do contador do pai com o do filho como função: { count * props.count }
        </h1>
      </div>
    </div>
  )
}

export default LifeCycleFunction
