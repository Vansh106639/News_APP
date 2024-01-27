import React, { Component } from 'react'
import spiner from './spiner.gif'
export class Speener extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spiner} alt='spiner'/>
      </div>
    )
  }
}

export default Speener
