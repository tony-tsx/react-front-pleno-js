import React, { Component } from 'react'

export default class LifeCycle extends Component {
  /**
   * Inicialização do componente 
   */
  constructor( props ) {
    super( props )
    /* console.log( 'constructor' ) */
    this.state = { count: 0, parentCount: 0, calcResult: 0 }
    this.handlerIncrementCount = this.handlerIncrementCount.bind( this )
  }

  static getDerivedStateFromProps( props, state ) {
    /* console.log( 'getDerivedStateFromProps' ) */
    return { parentCount: props.count, calcResult: state.count + props.count }
  }

  /**
   * Começo da construção do componente ( executado antes do render )
   */
  componentWillMount() {
    /* console.log( 'componentWillMount' ) */
  }

  /**
   * Executado antes antes da atualização provida por propriedades
   * @param {*} nextProps 
   */
  componentWillReceiveProps( nextProps ) {
    /* console.log( 'componentWillReceiveProps' ) */
  }

  /**
   * Executado antes da atualização inicial, e capaz de prevenir ou não renderizações desnecessario por alguma razão
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate( nextProps, nextState ) {
    /* console.log( 'shouldComponentUpdate' ) */
    /** Algoritmo complexo */
    // if ( 5 > 1 ) return false
    return true
  }

  /**
   * Executado antes da atualização
   */
  componentWillUpdate() {
    /* console.log( 'componentWillUpdate' ) */
  }

  render() {
    /* console.log( 'render' ) */
    return (
      <div>
        <h2>Contador do filho: {this.state.count}</h2>
        <button onClick={this.handlerIncrementCount}>Incrementar contador do filho</button>
        <div>
          <h1>
            Soma do contador do pai com o do filho: { this.state.calcResult }
          </h1>
        </div>
      </div>
    )
  }

  /**
   * Executado depois da atualização
   */
  componentDidUpdate() {
    /* console.log( 'componentDidUpdate' ) */
  }

  handlerIncrementCount() {
    this.setState( { count: this.state.count + 1 } )
  }

  handlerClick = () => {
    fetch( 'https://pokeapi.co/api/v2/pokemon' )
      .then( () => {}, () => {} )
  }
  /**
   * Termino da construção do componente ( executado depois do render )
   */
  componentDidMount() {
    /* console.log( 'componentDidMount' ) */
    // window.addEventListener( 'click', this.handlerClick )
  }

  componentWillUnmount() {
    /* console.log( 'componentWillUnmount' ) */
    // window.removeEventListener( 'click', this.handlerClick )
  }
}
