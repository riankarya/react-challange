// import { createStore } from 'redux'
// import reducer from './reducer'
// const store = createStore(reducer)

// export default store

import {  applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

const store = createStore(reducer , compose(applyMiddleware(ReduxThunk)))

export default store