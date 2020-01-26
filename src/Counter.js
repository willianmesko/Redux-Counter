import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

export const Counter = ({count, increment, decrement}) => {
  return (
    <p>
      <span className='counter'>Contador: {count}</span>
      <button className='increment' onClick={() => increment(10)}>+</button>
      <button className='decrement' onClick={() => decrement(20)}>-</button>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
