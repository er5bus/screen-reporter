import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

// reducers
import rootReducer from './reducers'

// middleware redux-thunk
import api from './middleware/api'
import storage from './middleware/storage'
import tabs from './middleware/tabs'


export default ( preloadedState = [] ) => {

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api, storage, tabs)
  )

  return store
}
