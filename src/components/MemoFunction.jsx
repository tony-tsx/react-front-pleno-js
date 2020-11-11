import { useMemo, useState, useCallback } from 'react'

const MemoFunction = ( { number, text } ) => {
  const [ b, setB ] = useState( 0 )
  const [ a, setA ] = useState( 0 )
  const [ c, setC ] = useState( 0 )

  const bhaskara = useMemo( () => {
    console.log( 'resolvendo a formula de bhaskara' )
    return b ** 2 - 4 * a * c
  }, [ a, b, c ] )

  const variable = useMemo( () => {
    console.log( 'calculando o numero multiplicado pelo comprimento do texto' )
    return number * text.length
  }, [ number, text ] )

  const showAlertOnClick = useCallback( () => {
    alert( variable )
  }, [ variable ] )

  const handlerAState = useCallback( ( event ) => {
    setA( parseInt( event.currentTarget.value ) )
  }, [] )

  const handlerBState = useCallback( ( event ) => {
    setB( parseInt( event.currentTarget.value ) )
  }, [] )

  const handlerCState = useCallback( ( event ) => {
    setC( parseInt( event.currentTarget.value ) )
  }, [] )

  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <div className="row align-items-center">
                <input type="number"
                  className="form-control"
                  style={ { width: 50 } }
                  value={a}
                  onChange={handlerAState}
                />

                <span style={ { fontSize: 26 } }>X²</span>

                <span style={ { fontSize: 26, marginLeft: 10, marginRight: 10 } }>+</span>

                <input type="number"
                  className="form-control"
                  style={ { width: 50 } }
                  value={b}
                  onChange={handlerBState}
                />

                <span style={ { fontSize: 26 } }>X</span>

                <span style={ { fontSize: 26, marginLeft: 10, marginRight: 10 } }>+</span>

                <input type="number"
                  style={ { width: 50 } }
                  className="form-control"
                  value={c}
                  onChange={handlerCState}
                />

                <span style={ { fontSize: 26, marginLeft: 10, marginRight: 10 } }>=</span>

                {bhaskara}
              </div>
            </div>
          </div>
        </div>
        <span style={ { marginRight: 10 } }>{variable}</span>
        <button className="btn btn-primary" onClick={showAlertOnClick}>
          Resultado
        </button>
      </form>
    </div>
  )
}

export default MemoFunction
