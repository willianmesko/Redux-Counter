import React, { Component } from 'react'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import Ola from './Ola'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import counterReducer from './reducer'

let store = createStore(counterReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <Counter />
          <DisplayCounter />
          <Ola nome={'Curso'} />
        </div>
      </Provider>
    )
  }
}

export default App
