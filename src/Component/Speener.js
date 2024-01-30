import React, { Component } from 'react'
import spiner from './spiner.gif'
export class Speener extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spiner} alt='spiner' style={{ width: '20px', height: '20px', margin: '50px 10px' }} />
      </div>
    )
  }
}

export default Speener
