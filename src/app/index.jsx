/* eslint-disable jsx-a11y/anchor-is-valid */
import { useReducer, useCallback, useMemo, useEffect } from 'react'

const contents = [
  'Cachorro', 'Gato', 'Cobra', 'Minhoca', 'Jacare', 'Urso', 'Lobo', 'Papagario', 'Tartaruga', 'Hamster',
  'Aguia', 'Pavao', 'Morcego', 'Girafa', 'Cacatua'
]

const getContentsInPage = ( page ) => {
  return contents.slice( 10 * ( page - 1 ), 10 * page )
}

const getContentsPageCount = () => {
  return Math.trunc( contents.length / 10 ) + 1
}

const initialState = {
  page: 1,
  content: getContentsInPage( 1 ) 
}

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
        content: getContentsInPage( state.page + 1 )
      }
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        page: state.page - 1,
        content: getContentsInPage( state.page - 1 )
      }
    case 'PAGE': return {
      ...state,
      page: action.page,
      content: getContentsInPage( action.page )
    }
    case 'RESET_CONTENT':
      return {
        ...state,
        page: 1,
        content: getContentsInPage( 1 )
      }
    default:
      break;
  }
}

const App = () => {
  const [ state, dispatch ] = useReducer( reducer, initialState )

  const lastPage = useMemo( () => {
    return getContentsPageCount()
  }, [] )

  const goNextPage = useCallback( () => {
    dispatch( { type: 'NEXT_PAGE' } )
  }, [] )

  const goPreviousPage = useCallback( () => {
    dispatch( { type: 'PREVIOUS_PAGE' } )
  }, [] )

  const goPage = useCallback( ( page ) => {
    dispatch( { type: 'PAGE', page } )
  }, [] )

  const pages = useMemo( () => {
    return Array( getContentsPageCount() ).fill( null ).map( ( v, index ) => index + 1 )
  }, [] )

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group">
            { state.content.map( animal => (
              <li className="list-group-item">{animal}</li>
            ) ) }
          </ul>
          <ul className="pagination">
            <li className={'page-item'}>
              <a className="page-link" onClick={goPreviousPage}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            { pages.map( page => (
              <li className={ `page-item${page === state.page ? ' active' : ''}` }>
                <a className="page-link" onClick={ () => goPage( page ) }>
                  {page}
                </a>
              </li>
            ) ) }
            <li className="page-item">
              <a className="page-link" onClick={goNextPage} >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App