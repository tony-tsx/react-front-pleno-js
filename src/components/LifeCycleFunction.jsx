import React, { useState, useEffect } from 'react'

const LifeCycleFunction = ( props ) => {
  const [ count, setCount ] = useState( 0 )

  // /** A função enviada represeta o incio de um ciclo */
  // useEffect( () => {
  //   /** Esse escopo representa o inicio de um novo ciclo */
  //   alert( 'LifeCycleFunction: um novo ciclo foi iniciado' )


  //   /** A função retornada representa um fim */
  //   return () => {
  //     alert( 'LifeCycleFunction um ciclo foi encerrada' )
  //   }
  // }, [ count ] )

  // useEffect( () => {
  //   const handler = () => {
  //     alert( 'um click na janela foi executado' )
  //   }
  //   window.addEventListener( 'click', handler )

  //   return () => {
  //     window.removeEventListener( 'click', handler )
  //   }
  // }, [] )

  useEffect( () => {
    // Semelhante ao DidUpdate ou DidMount -> depois da renderização
    console.log( `inicio do ciclo, o valor do contador é ${count}` )
    alert( `inicio do ciclo, o valor do contador é ${count}` )

    // Semelhante WillUnmount -> também é executado quando a dependencia é atualizada
    return () => {
      alert( `fim do ciclo, o valor do contador ainda é ${count}` )
      console.log( `fim do ciclo, o valor do contador ainda é ${count}` )
    }
  }, [ count ] )

  return (
    <div>
      <h2>Contador do filho como função: {count}</h2>
      <button onClick={ () => setCount( count + 1 ) }>Incrementar contador do filho como função</button>
    </div>
  )
}

export default LifeCycleFunction
