import { useState } from 'react'
import MemoFunction from "../components/MemoFunction"

const App = () => {
  const [ text, setText ] = useState( '' )
  const [ number, setNumber ] = useState( 0 )

  return (
    <div className="container">
      <div className="row my-5">
        <h1 className="text-center w-100">{text}</h1>
      </div>
      <div className="row align-items-center justify-content-center my-5">
        <div className="col-6">
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="Insira seu texto..."
              value={text}
              onChange={ event => { setText( event.currentTarget.value ) } }/>
          </div>
        </div>
        <div className="col-2">
          <div className="form-group">
            <input type="number"
              className="form-control"
              value={number}
              onChange={ event => {
                setNumber( parseInt( event.currentTarget.value ) )
              } }/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MemoFunction number={number} text={text} />
        </div>
      </div>
    </div>
  )
}

export default App
