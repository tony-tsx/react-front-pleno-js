import React, { Component } from 'react'

export default class LifeCycle extends Component {
  /**
   * Inicialização do componente 
   */
  constructor( props ) {
    super( props )
    this.state = { count: 0 }
  }

  interval

  /**
   * Começo da construção do componente ( executado antes do render )
   */
  UNSAFE_componentWillMount() {
    console.log( 'componentWillMount' )
  }

  render() {
    // console.log( 'render' )
    return <h1>{this.state.count}</h1>
  }

  handlerClick = () => {
    fetch( 'https://pokeapi.co/api/v2/pokemon' )
      .then( () => {}, () => {} )
  }
  /**
   * Termino da construção do componente ( executado depois do render )
   */
  componentDidMount() {
    console.log( 'componentDidMount' )
    this.interval = setInterval( () => {
      console.log( 'touch interval' )
      this.setState( { count: this.state.count + 1 } )
    }, 1000 )
    window.addEventListener( 'click', this.handlerClick )
  }

  componentWillUnmount() {
    if ( this.interval ) clearInterval( this.interval )
    window.removeEventListener( 'click', this.handlerClick )
  }
}
